import Head from 'next/head'
import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

import { MealsProvider } from '~/providers/MealsOfTheDayContext'
import { FavoritesContextProvider } from '~/providers/FavoritesContextProvider'
import globalStyles from '~/styles/global'
import theme from '~/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MealsProvider>
        <FavoritesContextProvider>
          <Head>
            <link rel="icon" href="/logo.png" />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,100&display=swap"
              rel="stylesheet"
            />
          </Head>
          {globalStyles}
          <Component {...pageProps} />
        </FavoritesContextProvider>
      </MealsProvider>
    </ThemeProvider>
  )
}
export default MyApp
