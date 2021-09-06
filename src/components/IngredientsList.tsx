import styled from '@emotion/styled'
import { Meal } from '~/utils/api'
import { Body } from './text'

const List = styled.ul`
  padding: ${(props) => props.theme.space.sm}px 0;
`

const ListItem = styled(Body)``

export interface IngredientsListProps {
  ingredients: Meal['ingredients']
}

export const IngredientsList = ({ ingredients }: IngredientsListProps) => {
  return (
    <List aria-label="List of ingredients">
      {ingredients.map(({ name, measure }, index) => {
        return (
          <ListItem as="li" key={index}>
            {measure} {name}
          </ListItem>
        )
      })}
    </List>
  )
}
