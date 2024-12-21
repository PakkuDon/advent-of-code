const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns how many cheats would save at least x picoseconds", () => {
    const input = `###############
#...#...#.....#
#.#.#.#.#.###.#
#S#...#.#.#...#
#######.#.#.###
#######.#.#...#
#######.#.###.#
###..E#...#...#
###.#######.###
#...###...#...#
#.#####.#.###.#
#.#...#.#.#...#
#.#.#.#.#.#.###
#...#...#...###
###############`

    expect(part1(input, 40)).toEqual(2)
    expect(part1(input, 64)).toEqual(1)
  })
})

describe("part2", () => {
  test("returns how many cheats would save at least x picoseconds with updated cheatcode", () => {
    const input = `###############
#...#...#.....#
#.#.#.#.#.###.#
#S#...#.#.#...#
#######.#.#.###
#######.#.#...#
#######.#.###.#
###..E#...#...#
###.#######.###
#...###...#...#
#.#####.#.###.#
#.#...#.#.#...#
#.#.#.#.#.#.###
#...#...#...###
###############`

    expect(part2(input, 70)).toEqual(41)
    expect(part2(input, 76)).toEqual(3)
  })
})
