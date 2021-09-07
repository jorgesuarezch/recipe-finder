import type { NextPage } from 'next'
import Head from 'next/head'

import { MealCard } from '~/components/MealCard'
import { HomePageHero } from '~/components/heroes/HomePageHero'
import { Body } from '~/components/homepage/Body'
import { useMealsOfTheDay } from '~/providers/MealsOfTheDayContext'
import { SearchContextProvider } from '~/providers/SearchContextProvider'
import { SearchFloatingButton } from '~/components/homepage/SearchFloatingButton'

const Home: NextPage = () => {
  const { state } = useMealsOfTheDay()
  const a = useMealsOfTheDay()

  return (
    <SearchContextProvider>
      <Body />
    </SearchContextProvider>
  )
}

export default Home
