import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router'

import { Button } from '~/components/Button'
import {
  useGlobalSearchActionsContext,
  useGlobalSearchContext,
} from '~/providers/SearchContextProvider'

const SearchButton = styled(Button)<{ isVisible?: boolean }>`
  position: fixed;
  bottom: 50px;
  right: 50px;
  transform: ${(props) =>
    props.isVisible ? `translate3d(0, 0, 0)` : `translate3d(200px, 0, 0)`};
  transition: transform 150ms ease-in-out;
`

export interface SearchFloatingButtonProps {}

export const SearchFloatingButton = (props: SearchFloatingButtonProps) => {
  const setGlobalSearchOn = useGlobalSearchActionsContext()
  const isSearchOn = useGlobalSearchContext()
  return (
    <SearchButton
      variant="red"
      icon="search"
      isVisible={!isSearchOn}
      onClick={() => setGlobalSearchOn(true)}
    />
  )
}
