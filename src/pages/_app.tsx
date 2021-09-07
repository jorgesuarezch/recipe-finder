import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

import { MealsProvider } from '~/providers/MealsOfTheDayContext'
import { FavoritesContextProvider } from '~/providers/FavoritesContextProvider'

import theme from '~/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MealsProvider>
        <FavoritesContextProvider>
          <Component {...pageProps} />
        </FavoritesContextProvider>
      </MealsProvider>
    </ThemeProvider>
  )
}
export default MyApp
