import { useRouter } from 'next/dist/client/router'

import { Button } from '~/components/Button'
import { FavoriteToggleButton } from '~/components/FavoriteToggleButton'
import { Meal } from '~/utils/api'
import { BaseNavbar } from './BaseNavbar'

export interface SecondaryNavbarProps {
  meal?: Meal
}

export const SecondaryNavbar = ({ meal }: SecondaryNavbarProps) => {
  const router = useRouter()
  return (
    <BaseNavbar>
      <Button icon="arrow-left" onClick={router.back} />
      {meal && <FavoriteToggleButton meal={meal} />}
    </BaseNavbar>
  )
}
