const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of stones after 25 blinks", () => {
    const input = `125 17`
    expect(part1(input)).toEqual(55312)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
