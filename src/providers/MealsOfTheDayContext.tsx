import React, { useReducer, useEffect } from 'react'

import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import range from 'lodash/range'

import { Meal, MealAPI } from '~/utils/api'

type Action =
  | { type: 'refresh'; payload: { meals: Meal[] } }
  | { type: 'error'; payload: { message: string } }
  | { type: 'loading' }

type Dispatch = (action: Action) => void
type State = {
  mealsOfTheDay: Meal[]
  loading?: boolean
  error?: string
  timestamp: number | null
}

type MealsProviderProps = { children: React.ReactNode }

const MealsStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function mealsReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'refresh': {
      return {
        ...state,
        mealsOfTheDay: action.payload.meals,
        timestamp: +new Date(),
        loading: false,
      }
    }
    case 'loading': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'error': {
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      }
    }
    default: {
      throw new Error(`Unhandled action: ${action}`)
    }
  }
}

/**
 * Provides the 5 random meals of the day
 * The idea here is to keep the meals even if the user refreshes the page by using the local storage.
 * @param param0
 * @returns
 */
export const MealsProvider = ({ children }: MealsProviderProps) => {
  const [state, dispatch] = useReducer(mealsReducer, {
    mealsOfTheDay: [],
    timestamp: null,
  })

  const value = { state, dispatch }

  useEffect(() => {
    // checks if it is necessary refresh the meals of the day
    if (
      state.timestamp !== null &&
      state.mealsOfTheDay.length &&
      differenceInCalendarDays(new Date(), new Date(state.timestamp)) === 0
    ) {
      return
    }

    const setMealsOfTheDay = async () => {
      try {
        dispatch({
          type: 'loading',
        })
        const meals = await fetchMealsOfTheDay()
        dispatch({
          type: 'refresh',
          payload: { meals },
        })
      } catch (error) {
        dispatch({
          type: 'error',
          payload: { message: 'error fetching the meals of the day' },
        })
      }
    }

    setMealsOfTheDay()
  }, [])

  return (
    <MealsStateContext.Provider value={value}>
      {children}
    </MealsStateContext.Provider>
  )
}

export const useMealsOfTheDay = () => {
  const context = React.useContext(MealsStateContext)
  if (context === undefined) {
    throw new Error('useMeals must be used within a MealsProvider')
  }
  return context
}

/**
 * Fetches the random meals per day, and store them in the localstorage.
 * @returns
 */
const fetchMealsOfTheDay = async () => {
  // check if they are already stored
  const cachedValue: { meals?: Meal[]; timestamp?: number } = JSON.parse(
    localStorage.getItem('mealsOfTheDay') || '{}'
  )

  if (
    cachedValue &&
    cachedValue.meals?.length === 5 &&
    cachedValue.timestamp &&
    differenceInCalendarDays(new Date(), new Date(cachedValue.timestamp)) === 0
  ) {
    return cachedValue.meals
  }

  const meals = await Promise.all(range(5).map(() => MealAPI.getRandomRecipe()))

  // saves meals in the loacl storage
  localStorage.setItem(
    'mealsOfTheDay',
    JSON.stringify({ meals, timestamp: +new Date() })
  )

  return meals
}
