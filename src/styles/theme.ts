import { mediaFactory } from './utils'

const breakpoints = {
  sm: 640,
  md: 900,
  lg: 1200,
  xl: 1600,
}

/**
 * media query helper fo using in styled components
 *
 * @example
 *
 * const  A = styled.div`
 *  ${media.lg`
 *    color: pink;
 * `}
 * `
 */
export const media = {
  sm: mediaFactory(breakpoints, 'sm'),
  md: mediaFactory(breakpoints, 'md'),
  lg: mediaFactory(breakpoints, 'lg'),
  xl: mediaFactory(breakpoints, 'xl'),
}

const theme = {
  breakpoints,
  fontSizes: {
    heading: 36,
    heading2: 32,
    heading3: 24,
    body: 14,
  },
  colors: {
    blue: '#07c',
    gray: '#343434',
    red: '#fb0007',
    black: '#222222',
    white: '#fff',
  },
  space: {
    none: 0,
    xxs: 4,
    xs: 8,
    sm: 16,
    md: 32,
    lg: 64,
    xl: 128,
    xxl: 256,
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Montserrat, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 300,
    heading: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  aspectRatios: {
    primary: 9 / 16,
  },
  sizes: {
    navbar: 80,
    container: 1200,
  },

  media,
  // shadows: {
  //   small: '0 0 4px rgba(0, 0, 0, .125)',
  //   large: '0 0 24px rgba(0, 0, 0, .125)',
  // },
  // variants: {},
  // text: {},
  // buttons: {
  //   primary: {
  //     color: 'white',
  //     bg: 'primary',
  //   },
  // },
}

export default theme
