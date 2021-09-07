import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

import { MealsOfTheDayContextProvider } from '~/providers/MealsOfTheDayContext'
import { FavoritesContextProvider } from '~/providers/FavoritesContextProvider'

import theme from '~/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MealsOfTheDayContextProvider>
        <FavoritesContextProvider>
          <Component {...pageProps} />
        </FavoritesContextProvider>
      </MealsOfTheDayContextProvider>
    </ThemeProvider>
  )
}
export default MyApp
