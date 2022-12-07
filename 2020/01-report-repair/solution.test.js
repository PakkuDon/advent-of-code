const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns the product of two numbers that have a sum of 2020", () => {
    const input = [1721, 979, 366, 299, 675, 1456]
    expect(part1(input)).toEqual(514579)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = ["a value"]
    expect(part2(input)).toEqual(0)
  })
})
