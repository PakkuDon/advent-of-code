const claimProcessor = require('./01-no-matter-how-you-slice-it.js')

describe('claimProcessor', () => {
  test('it counts number of squares with more than 2 or 3 claims', () => {
    const claims = [
      {
        x: 1,
        y: 3,
        width: 4,
        height: 4,
      },
      {
        x: 3,
        y: 1,
        width: 4,
        height: 4,
      },
      {
        x: 5,
        y: 5,
        width: 2,
        height: 2,
      },
    ]

    expect(claimProcessor(claims)).toBe(4)
  })
})
