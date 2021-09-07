import styled from '@emotion/styled'
import axios, { CancelTokenSource } from 'axios'
import { useEffect, useRef, useState } from 'react'

import {
  useGlobalSearchContext,
  useGlobalSearchResultsActionsContext,
} from '~/providers/SearchContextProvider'
import { MealAPI } from '~/utils/api'

// constants
const MIN_INPUT_LENGHT = 2

const Input = styled.input`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.heading3}px;
  font-weight: 300;

  background-color: transparent;
  border: none;

  caret-color: currentcolor;

  ::placeholder {
    color: ${(props) => props.theme.colors.white};
  }
`

export interface SearchInputProps {
  placeholder: string
  defaultValue?: string
}

export const SearchInput = ({ placeholder }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null)
  const [value, setValue] = useState('')
  const setGlobalSearchResults = useGlobalSearchResultsActionsContext()
  const isSearchOn = useGlobalSearchContext()

  /**
   * Initialize input depending on search context is active o
   */
  useEffect(() => {
    if (isSearchOn) {
      inputRef.current?.focus()
    } else {
      setValue('')
      setGlobalSearchResults([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearchOn])

  useEffect(() => {
    const currentSource = cancelTokenSourceRef.current
    if (currentSource) {
      currentSource.cancel('axios request cancelled')
    }

    const source = axios.CancelToken.source()
    cancelTokenSourceRef.current = source

    const search = async () => {
      try {
        const results = await MealAPI.searchMealByName(value, {
          cancelToken: source.token,
        })

        setGlobalSearchResults(results)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message)
        } else {
          console.error(error)
        }
      }
    }

    if (value.length >= MIN_INPUT_LENGHT && isSearchOn) {
      search()
    } else {
      setGlobalSearchResults([])
    }

    return () => {
      source.cancel('axios request cancelled')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <>
      <Input
        ref={inputRef}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </>
  )
}
