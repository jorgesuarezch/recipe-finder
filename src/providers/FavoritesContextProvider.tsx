import React, { useCallback, useEffect, useState } from 'react'
import omit from 'lodash/omit'
import { Meal } from '~/utils/api'

import { useContextFactory } from './utils'

type State = Record<string, Meal>
type Dispatch = (meal: Meal) => void

const FavoritesContext = React.createContext<State | undefined>(undefined)
const FavoritesActionsContext = React.createContext<Dispatch | undefined>(
  undefined
)

/**
 * Key to store the data in the localStorage
 */
const FAVORITES_KEY = 'favorites'

export const FavoritesContextProvider: React.FC = ({ children }) => {
  const [isHydrated, setHidrated] = useState(false)
  const [favorites, setFavorites] = useState<State>({})

  /** Hydrate favorites */
  useEffect(() => {
    const persitedFavorites = JSON.parse(
      localStorage.getItem(FAVORITES_KEY) || '{}'
    )

    setFavorites(persitedFavorites)
    setHidrated(true)
  }, [])

  /** Hydrate favorites */
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
    }
  }, [favorites, isHydrated])

  const toggle = useCallback(
    (meal: Meal) => {
      if (favorites[meal.id]) {
        setFavorites(omit(favorites, meal.id))
      } else {
        setFavorites(Object.assign({}, favorites, { [meal.id]: meal }))
      }
    },
    [favorites, setFavorites]
  )

  return (
    <FavoritesContext.Provider value={favorites}>
      <FavoritesActionsContext.Provider value={toggle}>
        {children}
      </FavoritesActionsContext.Provider>
    </FavoritesContext.Provider>
  )
}

export const useFavoritesContext = useContextFactory(
  'FavoritesContext',
  FavoritesContext
)
export const useFavoritesActionsContext = useContextFactory(
  'FavoritesActionsContext',
  FavoritesActionsContext
)
