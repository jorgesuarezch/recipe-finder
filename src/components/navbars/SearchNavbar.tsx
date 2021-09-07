import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'

import { Button } from '~/components/Button'
import {
  useGlobalSearchActionsContext,
  useGlobalSearchContext,
} from '~/providers/SearchContextProvider'
import { SearchInput } from '../homepage/SearchInput'
import { BaseNavbar } from './BaseNavbar'

const Navbar = styled(BaseNavbar)<{ isVisible?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  transform: ${(props) =>
    props.isVisible ? `translate3d(0, 0, 0)` : `translate3d(0, -200px, 0)`};
  transition: transform 150ms ease-in-out;
`

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SearchNavbar = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const setGlobalSearchOn = useGlobalSearchActionsContext()
  const isSearchOn = useGlobalSearchContext()

  /**
   * Focused the input when search is on
   */
  useEffect(() => {
    if (isSearchOn) {
      inputRef.current?.focus()
    }
  }, [inputRef, isSearchOn])

  return (
    <Navbar isVisible={isSearchOn}>
      <ItemsContainer>
        <Button icon="arrow-left" onClick={() => setGlobalSearchOn(false)} />
        <SearchInput placeholder="I'm craving..." defaultValue="appl" />
      </ItemsContainer>
    </Navbar>
  )
}
