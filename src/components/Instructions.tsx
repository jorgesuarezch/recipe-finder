import styled from '@emotion/styled'
import { Meal } from '~/utils/api'
import { Body, Heading } from './text'

const List = styled.section``

const P = styled(Body)`
  margin-bottom: ${(props) => props.theme.space.xs}px;
`

export interface InstructionsProps extends Pick<Meal, 'instructions'> {
  heading: string
}

export const Instructions = ({ instructions, heading }: InstructionsProps) => {
  return (
    <>
      <Heading as="h3" variant="heading2">
        {heading}
      </Heading>
      <List role="list">
        {instructions.split(/\r\n/).map((line, index) => (
          <P key={index} role="listitem">
            {line}
          </P>
        ))}
      </List>
    </>
  )
}
