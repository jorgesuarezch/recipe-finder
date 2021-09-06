import Head from 'next/head'

import type { AppProps } from 'next/app'
import { MealsProvider } from '~/providers/MealsOfTheDayContext'
import globalStyles from '~/styles/global'
import { ThemeProvider } from '@emotion/react'

import theme from '~/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MealsProvider>
        <Head>
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
      </MealsProvider>
    </ThemeProvider>
  )
}
export default MyApp
