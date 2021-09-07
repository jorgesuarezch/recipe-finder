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
  max-width: 80%;
  word-wrap: nowrap;
  white-space: pre;
  text-overflow: ellipsis;
  overflow: hidden;

  margin: 0 auto ${(props) => props.theme.space.md}px;
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
      <Container title={heading}>
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
