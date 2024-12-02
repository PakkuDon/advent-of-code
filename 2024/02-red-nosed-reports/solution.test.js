const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of safe reports", () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`
    expect(part1(input)).toEqual(2)
  })
})

describe("part2", () => {
  test("returns number of safe reports with problem dampener", () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`
    expect(part2(input)).toEqual(4)
  })
})
