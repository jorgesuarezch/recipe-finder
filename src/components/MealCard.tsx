import Link from 'next/link'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

import { Image } from '~/components/Image'
import { Heading } from '~/components/text'

const Container = styled.a`
  display: block;
  padding-top: ${(props) => props.theme.space.lg}px;
  cursor: pointer;
`

const StyledHeading = styled(Heading)`
  display: block;
  margin-bottom: ${(props) => props.theme.space.md}px;
  text-align: center;
`

interface MealCardProps {
  heading: string
  image: string
  url: string
}

export const MealCard = ({ heading, image, url }: MealCardProps) => {
  const { aspectRatios } = useTheme()
  return (
    <Link href={url} passHref>
      <Container>
        <StyledHeading>{heading}</StyledHeading>
        <Image
          src={image}
          alt={`${heading} meal`}
          aspectRatio={aspectRatios.primary}
        />
      </Container>
    </Link>
  )
}
