const claimProcessor = require('./02-no-matter-how-you-slice-it.js')

describe('claimProcessor', () => {
  test("returns claim that doesn't overlap with any others", () => {
    const claims = [
      {
        id: 1,
        x: 1,
        y: 3,
        width: 4,
        height: 4,
      },
      {
        id: 2,
        x: 3,
        y: 1,
        width: 4,
        height: 4,
      },
      {
        id: 3,
        x: 5,
        y: 5,
        width: 2,
        height: 2,
      },
    ]

    expect(claimProcessor(claims).id).toBe(3)
  })
})
