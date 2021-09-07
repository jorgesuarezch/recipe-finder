import type { NextPage } from 'next'
import Head from 'next/head'
import { GridOfMealCards } from '~/components/GridOfMealCards'
import { HomePageHero } from '~/components/heroes/HomePageHero'

import { Container } from '~/components/layout/Container'
import { SecondaryNavbar } from '~/components/navbars/SecondaryNavbar'
import { useFavoritesContext } from '~/providers/FavoritesContextProvider'

const Home: NextPage = () => {
  const favorites = useFavoritesContext()

  return (
    <>
      <Head>
        <title>Recipe Finder | My Favorites</title>
        <meta name="description" content="List of my favorites recipes" />
      </Head>
      <SecondaryNavbar />

      <main>
        <Container>
          {<HomePageHero heading="My favorites" />}

          <GridOfMealCards meals={Object.values(favorites)} />
        </Container>
      </main>
    </>
  )
}

export default Home
