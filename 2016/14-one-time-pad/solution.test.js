const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns index that produces 64th key", () => {
    const input = `abc`
    expect(part1(input)).toEqual(22728)
  })
})

describe("part2", () => {
  xtest("skipping due to long execution time", () => {
    const input = `abc`
    expect(part2(input)).toEqual(22551)
  })
})
