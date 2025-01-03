const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of 1 digits * number of 2 digits in layer with fewest 0s", () => {
    const input = `123456789012`
    expect(part1(input, 3, 2)).toEqual(1)
  })
})

describe("part2", () => {
  test("returns final image after stacking layers", () => {
    const input = `0222112222120000`
    expect(part2(input, 2, 2)).toEqual(`01
10`)
  })
})
