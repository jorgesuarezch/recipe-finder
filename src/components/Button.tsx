import { css, Theme, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'

import ArrowLeft from '~/components/icons/ArrowLeft'
import Heart from '~/components/icons/Heart'
import HeartSolid from '~/components/icons/HeartSolid'
import Search from '~/components/icons/Search'

const StyledButton = styled.button<{ variant?: ButtonProps['variant'] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  width: ${(props) => props.theme.space.lg}px;
  height: ${(props) => props.theme.space.lg}px;
  font-size: 42px;
  cursor: pointer;

  background: ${(props) => {
    switch (props.variant) {
      case 'red':
        return props.theme.colors.red

      default:
        return props.theme.colors.gray
    }
  }};
`

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  icon: 'heart' | 'heart-solid' | 'arrow-left' | 'search'
  variant?: 'gray' | 'red'
  href?: string
}

const Icon = ({ icon }: Pick<ButtonProps, 'icon'>) => {
  const { colors } = useTheme()
  switch (icon) {
    case 'heart':
      return <Heart fill={colors.white} />

    case 'heart-solid':
      return <HeartSolid fill={colors.white} />

    case 'arrow-left':
      return <ArrowLeft fill={colors.white} />

    case 'search':
      return <Search fill={colors.white} />

    default:
      return null
  }
}

export const Button = ({ icon, href, ...props }: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <StyledButton as="a" {...props}>
          <Icon icon={icon} />
        </StyledButton>
      </Link>
    )
  }

  return (
    <StyledButton type="button" {...props}>
      <Icon icon={icon} />
    </StyledButton>
  )
}
