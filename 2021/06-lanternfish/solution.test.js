const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of fish after given amount of days", () => {
    const input = `3,4,3,1,2`
    expect(part1(input, 18)).toEqual(26)
  })
})

describe("part2", () => {
  test("returns number of fish after a lot of days", () => {
    const input = `3,4,3,1,2`
    expect(part2(input, 18)).toEqual(26)
    expect(part2(input, 256)).toEqual(26984457539)
  })
})
