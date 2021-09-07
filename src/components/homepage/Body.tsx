import type { NextPage } from 'next'
import Head from 'next/head'

import { MealCard } from '~/components/MealCard'
import { HomePageHero } from '~/components/heroes/HomePageHero'
import { SearchNavbar } from '~/components/navbars/SearchNavbar'
import { useMealsOfTheDay } from '~/providers/MealsOfTheDayContext'
import {
  useGlobalSearchContext,
  useGlobalSearchResultsContext,
} from '~/providers/SearchContextProvider'
import { SearchFloatingButton } from '~/components/homepage/SearchFloatingButton'
import styled from '@emotion/styled'
import { Heading } from '../text'
import { Container } from '../layout/Container'

const Main = styled.main<{ paddedTop?: boolean }>`
  padding-top: ${(props) => (props.paddedTop ? props.theme.sizes.navbar : 0)}px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;

  ${(props) => props.theme.media.md`
    grid-template-columns: 50% 50%;
    column-gap: ${props.theme.space.sm}px;
  `}
`

export const Body: NextPage = () => {
  const { state } = useMealsOfTheDay()
  const results = useGlobalSearchResultsContext()
  const isSearchOn = useGlobalSearchContext()

  const meals = isSearchOn ? results : state.mealsOfTheDay
  return (
    <>
      <Head>
        <title>Recipe Finder | Home</title>
        <meta name="description" content="See the receipes of the day" />
      </Head>

      <SearchNavbar />
      <Main paddedTop={isSearchOn}>
        <Container>
          {!isSearchOn && <HomePageHero heading="Recipes of the day" />}
          {isSearchOn && meals.length === 0 && (
            <Heading variant="heading3" as="p">
              no results
            </Heading>
          )}
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
        </Container>
      </Main>
      <SearchFloatingButton />
    </>
  )
}
