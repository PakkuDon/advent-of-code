const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of trees encountered for specific map", () => {
    const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`
    expect(part1(input)).toEqual(7)
  })
})

describe("part2", () => {
  test("returns product of trees encountered for all slopes", () => {
    const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`
    expect(part2(input)).toEqual(336)
  })
})
