const getNumberOfHousesVisited = require('./01')

describe('getNumberOfHousesVisited', () => {
  test('> visits 2 houses', () => {
    const directions = ['>']
    expect(getNumberOfHousesVisited(directions)).toBe(2)
  })

  test('^>v< visits 4 houses', () => {
    const directions = ['^', '>', 'v', '<']
    expect(getNumberOfHousesVisited(directions)).toBe(4)
  })

  test('^v^v^v^v^v visits 2 houses', () => {
    const directions = ['^', 'v', '^', 'v', '^', 'v', '^', 'v', '^', 'v']
    expect(getNumberOfHousesVisited(directions)).toBe(2)
  })
})
