import { useRouter } from 'next/dist/client/router'

import { Button } from '~/components/Button'
import { BaseNavbar } from './BaseNavbar'

export interface SecondaryNavbarProps {
  backLink?: string
}

export const SecondaryNavbar = (props: SecondaryNavbarProps) => {
  const router = useRouter()
  return (
    <BaseNavbar>
      <Button icon="arrow-left" onClick={router.back} />
      <Button icon="heart" />
    </BaseNavbar>
  )
}
