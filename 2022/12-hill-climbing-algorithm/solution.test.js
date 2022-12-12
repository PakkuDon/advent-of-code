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

describe("part2", () => {
  test("returns fewest steps from any starting point to reach destination", () => {
    const input = `
Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`
    expect(part2(input)).toEqual(29)
  })
})
