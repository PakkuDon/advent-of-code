const part2 = require('./02')

describe('part2', () => {
  test('it returns the length of the shortest polymer possible', () => {
    const polymer = 'dabAcCaCBAcCcaDA'
    expect(part2(polymer)).toBe(4)
  })
})
