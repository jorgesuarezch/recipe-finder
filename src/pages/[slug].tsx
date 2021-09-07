import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { useTheme } from '@emotion/react'

import { Meal, MealAPI } from '~/utils/api'
import { Image } from '~/components/Image'
import { Heading } from '~/components/text'
import { IngredientsList } from '~/components/IngredientsList'
import { Instructions } from '~/components/Instructions'
import { SecondaryNavbar } from '~/components/navbars/SecondaryNavbar'
import styled from '@emotion/styled'
import { Container } from '~/components/layout/Container'

const CopyContainer = styled.div`
  padding: ${(props) => props.theme.space.md}px
    ${(props) => props.theme.space.sm}px;
`

export interface MealDetailPageProps {
  meal?: Meal
}

const MealDetailPage: NextPage<MealDetailPageProps> = ({ meal }) => {
  const { aspectRatios } = useTheme()

  if (!meal) {
    return null
  }
  const { name, image, instructions } = meal

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={`receipe for a delicious ${name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SecondaryNavbar meal={meal} />

      <Container>
        <Image
          src={image}
          alt={`${name} meal`}
          aspectRatio={aspectRatios.primary}
        />
        <CopyContainer>
          <Heading variant="heading2">{name}</Heading>
          <IngredientsList ingredients={meal.ingredients} />
          <Instructions heading={'Directions'} instructions={instructions} />
        </CopyContainer>
      </Container>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    }
  }
  try {
    const meal = await MealAPI.getMealBySlug(params.slug as string)

    // Pass post data to the page via props
    return {
      props: { meal },
      revalidate: 1,
    }
  } catch (error) {
    return {
      props: {},
      notFound: true,
    }
  }
}

export default MealDetailPage
