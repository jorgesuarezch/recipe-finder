import { identity } from './index'

describe('identity util', () => {
  it('should return the given value', () => {
    expect(identity(2)).toBe(2)
  })
})
