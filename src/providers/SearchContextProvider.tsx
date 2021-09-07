import React, { useState } from 'react'
import { Meal } from '~/utils/api'

import { useContextFactory } from './utils'

type SetSearchOnAction = (arg: boolean) => void
type SetSearchResultsAction = (results: Meal[]) => void

const GlobalSearchContext = React.createContext<boolean | undefined>(undefined)
const GlobalSearchActionsContext = React.createContext<
  SetSearchOnAction | undefined
>(undefined)

const GlobalSearchResultsContext = React.createContext<Meal[] | undefined>(
  undefined
)
const GlobalSearchResultsActionsContext = React.createContext<
  SetSearchResultsAction | undefined
>(undefined)

export const SearchContextProvider: React.FC = ({ children }) => {
  const [isSearchOn, setSearchOn] = useState(false)
  const [searchResults, setSearchResults] = useState<Meal[]>([])

  return (
    <GlobalSearchContext.Provider value={isSearchOn}>
      <GlobalSearchActionsContext.Provider value={setSearchOn}>
        <GlobalSearchResultsContext.Provider value={searchResults}>
          <GlobalSearchResultsActionsContext.Provider value={setSearchResults}>
            {children}
          </GlobalSearchResultsActionsContext.Provider>
        </GlobalSearchResultsContext.Provider>
      </GlobalSearchActionsContext.Provider>
    </GlobalSearchContext.Provider>
  )
}

export const useGlobalSearchContext = useContextFactory(
  'GlobalSearchContext',
  GlobalSearchContext
)
export const useGlobalSearchActionsContext = useContextFactory(
  'GlobalSearchActionsContext',
  GlobalSearchActionsContext
)

export const useGlobalSearchResultsContext = useContextFactory(
  'GlobalSearchResultsContext',
  GlobalSearchResultsContext
)
export const useGlobalSearchResultsActionsContext = useContextFactory(
  'GlobalSearchResultsActionsContext',
  GlobalSearchResultsActionsContext
)
