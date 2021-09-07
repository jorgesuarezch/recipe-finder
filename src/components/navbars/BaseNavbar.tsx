import styled from '@emotion/styled'

import { Container } from '../layout/Container'

const Wrapper = styled.div`
  --navbar-height: ${(props) => props.theme.sizes.navbar}px;
  --navbar-width: 100vw;
  position: relative;
  top: 0;
  width: var(--navbar-width);
  height: var(--navbar-height);
`
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 ${(props) => props.theme.space.sm}px;
  width: var(--navbar-width);
  background: ${(props) => props.theme.colors.gray};
  z-index: 1;
`

const NavInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--navbar-height);
`

export interface BaseNavbarProps {
  className?: string
}

export const BaseNavbar: React.FC<BaseNavbarProps> = ({
  children,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Nav>
        <NavInner>{children}</NavInner>
      </Nav>
    </Wrapper>
  )
}
