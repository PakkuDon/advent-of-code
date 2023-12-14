const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns sum of load caused by all rounded rocks", () => {
    const input = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`
    expect(part1(input)).toEqual(136)
  })
})

describe("part2", () => {
  test("returns sum of load caused by all rounded rocks after 1000000000 cycles", () => {
    const input = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`
    expect(part2(input)).toEqual(64)
  })
})
