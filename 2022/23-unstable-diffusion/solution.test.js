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

describe("part2", () => {
  test("returns first round where no elves move", () => {
    const input = `....#..
..###.#
#...#.#
.#...##
#.###..
##.#.##
.#..#..`
    expect(part2(input)).toEqual(20)
  })
})
