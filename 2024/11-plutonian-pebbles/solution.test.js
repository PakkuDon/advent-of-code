const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of stones after 25 blinks", () => {
    const input = `125 17`
    expect(part1(input)).toEqual(55312)
  })
})

describe("part2", () => {
  xtest("no example output provided", () => {})
})
