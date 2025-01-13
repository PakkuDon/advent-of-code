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

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
