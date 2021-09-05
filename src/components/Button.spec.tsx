import React from 'react'
import { render, screen, waitFor } from '~tests/utils'
import { Button } from './Button'

test('Render button component properly', async () => {
  render(<Button>Click Me!</Button>)
  expect(screen.getByText(`Click Me!`)).toBeInTheDocument()
})
