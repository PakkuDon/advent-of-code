const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns value at given coordinates", () => {
    const input = `To continue, please consult the code grid in the manual.  Enter the code at row 5, column 6.`
    expect(part1(input)).toEqual(31663883)
  })
})

describe("part2", () => {
  xtest("auto-completes after 49 stars", () => {})
})
