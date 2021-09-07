import { Button } from '~/components/Button'
import { useGlobalSearchActionsContext } from '~/providers/SearchContextProvider'

export const SearchFloatingButton = () => {
  const setGlobalSearchOn = useGlobalSearchActionsContext()

  return (
    <Button
      variant="red"
      icon="search"
      aria-label="search a meal"
      onClick={() => setGlobalSearchOn(true)}
    />
  )
}
