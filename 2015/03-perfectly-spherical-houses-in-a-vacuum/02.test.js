const getNumberOfHousesVisitedWithRobotSanta = require('./02')

describe('getNumberOfHousesVisitedWithRobotSanta', () => {
  test('^v visits 3 houses', () => {
    const directions = ['^', 'v']
    expect(getNumberOfHousesVisitedWithRobotSanta(directions)).toBe(3)
  })

  test('^>v< visits 3 houses', () => {
    const directions = ['^', '>', 'v', '<']
    expect(getNumberOfHousesVisitedWithRobotSanta(directions)).toBe(3)
  })

  test('^v^v^v^v^v visits 11 houses', () => {
    const directions = ['^', 'v', '^', 'v', '^', 'v', '^', 'v', '^', 'v']
    expect(getNumberOfHousesVisitedWithRobotSanta(directions)).toBe(11)
  })
})
