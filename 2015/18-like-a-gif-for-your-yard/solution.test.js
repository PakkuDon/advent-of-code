const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns how many lights are on after given steps", () => {
    const input = `.#.#.#
...##.
#....#
..#...
#.#..#
####..`
    expect(part1(input, 4)).toEqual(4)
  })
})

describe("part2", () => {
  test("returns how many lights are on with stuck pixels", () => {
    const input = `.#.#.#
...##.
#....#
..#...
#.#..#
####..`
    expect(part2(input, 5)).toEqual(17)
  })
})
