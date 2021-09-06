import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router'

import { Button } from '~/components/Button'

const Container = styled.div`
  --navbar-height: 80px;
  --navbar-width: 100vw;
  position: relative;
  top: 0;
  width: var(--navbar-width);
  height: var(--navbar-height);
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 ${(props) => props.theme.space.sm}px;
  height: var(--navbar-height);
  width: var(--navbar-width);
  background: ${(props) => props.theme.colors.gray};
  z-index: 1;
`

export interface SecondaryNavbarProps {
  backLink?: string
}

export const SecondaryNavbar = (props: SecondaryNavbarProps) => {
  const router = useRouter()
  return (
    <Container>
      <Nav>
        <Button icon="arrow-left" onClick={router.back} />
        <Button icon="heart" />
      </Nav>
    </Container>
  )
}
