import type { NextPage } from 'next'
import Head from 'next/head'

import { Button } from '~/components/Button'
import { GridOfMealCards } from '~/components/GridOfMealCards'
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

const FloatingContainer = styled.div<{ isVisible?: boolean }>`
  display: grid;
  grid-row-gap: ${(props) => props.theme.space.sm}px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  transform: ${(props) =>
    props.isVisible ? `translate3d(0, 0, 0)` : `translate3d(200px, 0, 0)`};
  visibility: ${(props) => (props.isVisible ? `visible` : `hidden`)};
  transition: 150ms ease-in-out;
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
          <GridOfMealCards meals={meals} />
        </Container>
      </Main>
      <FloatingContainer isVisible={!isSearchOn}>
        <Button
          icon="heart-solid"
          href="/favorites"
          aria-label="See my favorites"
        />
        <SearchFloatingButton />
      </FloatingContainer>
    </>
  )
}
