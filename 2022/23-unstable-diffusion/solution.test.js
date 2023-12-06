const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of empty tiles after 10 rounds", () => {
    const input = `....#..
..###.#
#...#.#
.#...##
#.###..
##.#.##
.#..#..`
    expect(part1(input)).toEqual(110)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
