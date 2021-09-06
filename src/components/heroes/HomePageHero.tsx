import styled from '@emotion/styled'
import { Heading } from '~/components/text'
const ImageContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 0;
  padding-bottom: ${(props) => props.theme.aspectRatios.primary * 100}%;
  width: 100%;
  background-image: url('/home-background.jpg');
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: url('/logo.png') no-repeat center;
    background-size: 30%;
  }
`

const H1 = styled(Heading)`
  margin-top: ${(props) => props.theme.space.md}px;
  margin-bottom: ${(props) => props.theme.space.md}px;
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
`

const Logo = styled.img``

export interface HomePageHeroProps {
  heading: string
}

export const HomePageHero = ({ heading }: HomePageHeroProps) => {
  return (
    <>
      <ImageContainer aria-hidden="true" />
      <H1 as="h1" variant="heading3">
        {heading}
      </H1>
    </>
  )
}
