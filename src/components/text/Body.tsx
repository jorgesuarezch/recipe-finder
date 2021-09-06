import styled from '@emotion/styled'

const P = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  line-height: ${(props) => props.theme.lineHeights.body};
`

export interface BodyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  as?: React.ElementType
  clasName?: string
}

export const Body = (props: BodyProps) => {
  return <P {...props} />
}
