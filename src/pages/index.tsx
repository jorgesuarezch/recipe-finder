import type { NextPage } from 'next'

import { Body } from '~/components/homepage/Body'
import { SearchContextProvider } from '~/providers/SearchContextProvider'

const Home: NextPage = () => {
  return (
    <SearchContextProvider>
      <Body />
    </SearchContextProvider>
  )
}

export default Home
