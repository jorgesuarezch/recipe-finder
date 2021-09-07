import { Button } from '~/components/Button'
import {
  useFavoritesContext,
  useFavoritesActionsContext,
} from '~/providers/FavoritesContextProvider'
import { Meal } from '~/utils/api'

interface FavoriteToggleButtonProps {
  meal: Meal
}

export const FavoriteToggleButton = ({ meal }: FavoriteToggleButtonProps) => {
  const favorites = useFavoritesContext()
  const toogleFavorite = useFavoritesActionsContext()
  const isFavorited = Boolean(favorites[meal.id])
  const icon = isFavorited ? 'heart-solid' : 'heart'

  return <Button icon={icon} onClick={() => toogleFavorite(meal)} />
}
