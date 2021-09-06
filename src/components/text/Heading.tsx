import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'

const stylesH2Variant = (theme: Theme) => css`
  font-size: ${theme.fontSizes.heading2}px;
`

const stylesH3Variant = (theme: Theme) => css`
  font-family: ${theme.fonts.body}px;
  font-size: ${theme.fontSizes.heading3}px;
  font-style: italic;
  font-weight: 600;
  letter-spacing: 0.1em;
`

const H2 = styled.h2<{ variant?: HeadingProps['variant'] }>`
  font-family: ${(props) => props.theme.fonts.heading}px;
  font-size: ${(props) => props.theme.fontSizes.heading}px;
  line-height: ${(props) => props.theme.lineHeights.heading};

  ${({ theme, variant }) => {
    if (variant === 'heading2') {
      return stylesH2Variant(theme)
    }

    if (variant === 'heading3') {
      return stylesH3Variant(theme)
    }
  }}
`

export interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
  variant?: 'heading1' | 'heading2' | 'heading3'
}

export const Heading = (props: HeadingProps) => {
  return <H2 {...props} />
}
