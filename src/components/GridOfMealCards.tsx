import { MealCard } from '~/components/MealCard'
import styled from '@emotion/styled'
import { Meal } from '~/utils/api'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;

  ${(props) => props.theme.media.md`
    grid-template-columns: 50% 50%;
    column-gap: ${props.theme.space.sm}px;
  `}
`

export interface GridOfMealCardsProps {
  meals: Meal[]
}

export const GridOfMealCards = ({ meals }: GridOfMealCardsProps) => {
  return (
    <Grid>
      {meals.map((meal) => {
        return (
          <MealCard
            image={meal.image}
            heading={meal.name}
            url={`/${meal.slug}`}
            key={meal.slug}
          />
        )
      })}
    </Grid>
  )
}
