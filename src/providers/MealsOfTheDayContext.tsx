import React, { useReducer, useEffect } from 'react'

import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import range from 'lodash/range'

import { Meal, MealAPI } from '~/utils/api'
import { useContextFactory } from './utils'

type Action =
  | { type: 'refresh'; payload: { meals: Meal[] } }
  | { type: 'error'; payload: { message: string } }
  | { type: 'loading' }

export type MealsOfTheDayContexState = {
  meals: Meal[]
  loading?: boolean
  error?: string
  timestamp: number | null
}

const MealsOfTheDayContext = React.createContext<
  MealsOfTheDayContexState | undefined
>(undefined)

function mealsReducer(
  state: MealsOfTheDayContexState,
  action: Action
): MealsOfTheDayContexState {
  switch (action.type) {
    case 'refresh': {
      return {
        ...state,
        meals: action.payload.meals,
        timestamp: +new Date(),
        error: undefined,
        loading: false,
      }
    }
    case 'loading': {
      return {
        ...state,
        loading: true,
        error: undefined,
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
 * The idea here is to persist the meals so when the user refreshes the page they get the same until the date change.
 * @param param0
 * @returns
 */
export const MealsOfTheDayContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mealsReducer, {
    meals: [],
    timestamp: null,
  })

  useEffect(() => {
    // checks if it is necessary refresh the meals of the day
    if (
      state.loading ||
      (state.timestamp !== null &&
        state.meals.length &&
        differenceInCalendarDays(new Date(), new Date(state.timestamp)) === 0)
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
  }, [state])

  return (
    <MealsOfTheDayContext.Provider value={state}>
      {children}
    </MealsOfTheDayContext.Provider>
  )
}

export const useMealsOfTheDayContext = useContextFactory(
  'MealsOfTheDayContext',
  MealsOfTheDayContext
)

const MEALS_OF_THE_DAY_KEY = 'mealsOfTheDay'

/**
 * Fetches the random meals per day, and store them in the localstorage.
 * @returns
 */
const fetchMealsOfTheDay = async () => {
  // check if they are already stored
  const cachedValue: { meals?: Meal[]; timestamp?: number } = JSON.parse(
    localStorage.getItem(MEALS_OF_THE_DAY_KEY) || '{}'
  )

  if (
    cachedValue &&
    cachedValue.meals?.length === 5 &&
    cachedValue.timestamp &&
    differenceInCalendarDays(new Date(), new Date(cachedValue.timestamp)) === 0
  ) {
    return cachedValue.meals
  }

  // TODO: make sure random recipes are unique
  const meals = await Promise.all(range(5).map(() => MealAPI.getRandomMeal()))

  // saves meals in the local storage
  localStorage.setItem(
    MEALS_OF_THE_DAY_KEY,
    JSON.stringify({ meals, timestamp: +new Date() })
  )

  return meals
}
