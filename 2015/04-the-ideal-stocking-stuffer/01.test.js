const findLowestNumberForKey = require('./01')

describe('findLowestNumberForKey', () => {
  test('abcdef returns 609043', () => {
    const secretKey = 'abcdef'
    expect(findLowestNumberForKey(secretKey)).toBe(609043)
  })

  test('pqrstuv returns 1048970', () => {
    const secretKey = 'pqrstuv'
    expect(findLowestNumberForKey(secretKey)).toBe(1048970)
  })
})
