import globalStyles from '../styles/global'
import type { AppProps } from 'next/app'
import { MealsProvider } from '~/providers/MealsOfTheDayContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MealsProvider>
      {globalStyles}
      <Component {...pageProps} />
    </MealsProvider>
  )
}
export default MyApp
