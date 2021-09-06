import type { NextPage } from 'next'
import Head from 'next/head'

import { MealCard } from '~/components/MealCard'
import { useMealsOfTheDay } from '~/providers/MealsOfTheDayContext'

const Home: NextPage = () => {
  const { state } = useMealsOfTheDay()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {state.mealsOfTheDay.map((meal) => {
          return (
            <MealCard
              image={meal.image}
              heading={meal.name}
              url={`/${meal.slug}`}
              key={meal.slug}
            />
          )
        })}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
