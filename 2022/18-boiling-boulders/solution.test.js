const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns the total surface area of all cubes that are not connected", () => {
    const input = [
      "2,2,2",
      "1,2,2",
      "3,2,2",
      "2,1,2",
      "2,3,2",
      "2,2,1",
      "2,2,3",
      "2,2,4",
      "2,2,6",
      "1,2,5",
      "3,2,5",
      "2,1,5",
      "2,3,5",
    ]
    expect(part1(input)).toEqual(64)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = ["a value"]
    expect(part2(input)).toEqual(0)
  })
})
