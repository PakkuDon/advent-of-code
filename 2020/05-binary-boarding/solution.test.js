const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns highest seat ID from set of boarding passes", () => {
    const input = `FBFBBFFRLR
BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`
    expect(part1(input)).toEqual(820)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
