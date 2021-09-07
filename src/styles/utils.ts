import { css } from '@emotion/react'

/**
 * Create a media rule based on the given key
 * @param key
 */
export function mediaFactory<T extends { [key: string]: number }>(
  breakpoints: T,
  key: keyof T
) {
  return (template: TemplateStringsArray, ...args: any[]) =>
    css`
      @media screen and (min-width: ${breakpoints[key]}px) {
        ${css(template, ...args)};
      }
    `
}
