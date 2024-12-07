const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of 1 digits * number of 2 digits in layer with fewest 0s", () => {
    const input = `123456789012`
    expect(part1(input, 3, 2)).toEqual(1)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
