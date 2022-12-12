const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of steps to traverse hills", () => {
    const input = `
Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`
    expect(part1(input)).toEqual(31)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = ["a value"]
    expect(part2(input)).toEqual(0)
  })
})
