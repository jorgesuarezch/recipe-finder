import React from 'react'
import { render, screen } from '~tests/utils'
import { Button } from './Button'

describe('Button Component', () => {
  it('Should render button component by default', async () => {
    const { container } = render(
      <Button icon="heart" aria-label="favorite this meal" />
    )

    expect(screen.getByLabelText(`favorite this meal`)).toBeInTheDocument()
    expect(screen.getByLabelText(`favorite this meal`).tagName).toBe('BUTTON')
    expect(container.querySelectorAll('svg').length).toBe(1)
  })

  it('Should render a element when href prop is present', async () => {
    const { container } = render(
      <Button icon="arrow-left" href="/" aria-label="go back" />
    )

    expect(screen.getByLabelText(`go back`)).toBeInTheDocument()
    expect(screen.getByLabelText(`go back`).tagName).toBe('A')
    expect(container.querySelectorAll('svg').length).toBe(1)
  })

  it('Should render an empty button if the icon given is not valid', async () => {
    render(<Button icon={'fake' as any} href="/" aria-label="empty button" />)

    expect(screen.getByLabelText(`empty button`)).toBeEmptyDOMElement()
  })
})
