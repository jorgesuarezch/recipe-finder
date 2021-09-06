import { css } from '@emotion/react'
import styled from '@emotion/styled'

const withAspectRatioStyles = (aspectRatio: number) => css`
  position: relative;
  height: 0;
  width: 100%;
  padding-bottom: ${100 * aspectRatio}%;
`

const Wrapper = styled.div<{ aspectRatio?: number }>`
  ${({ aspectRatio }) =>
    aspectRatio && aspectRatio > 0 && withAspectRatioStyles(aspectRatio)}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export interface ImageProps {
  src: string
  alt: string
  height?: number
  width?: number
  aspectRatio?: number
  className?: string
}

export const Image = ({
  aspectRatio,
  height,
  width,
  alt,
  ...props
}: ImageProps) => {
  let ratio = aspectRatio
  if (height && width && height > 0 && width > 0) {
    ratio = height / width
  }
  return (
    <Wrapper aspectRatio={ratio}>
      <img loading="lazy" alt={alt} {...props} />
    </Wrapper>
  )
}
