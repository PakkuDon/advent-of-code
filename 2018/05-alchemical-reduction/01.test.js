const part1 = require('./01')

describe('part1', () => {
  test('it returns the number of polymers remaining after reactions', () => {
    const polymer = 'dabAcCaCBAcCcaDA'
    expect(part1(polymer)).toBe(10)
  })
})
