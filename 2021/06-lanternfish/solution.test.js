const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of fish after given amount of days", () => {
    const input = `3,4,3,1,2`
    expect(part1(input, 18)).toEqual(26)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
