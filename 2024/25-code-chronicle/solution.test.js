const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of unique lock/key pairs that don't overlap", () => {
    const input = `#####
.####
.####
.####
.#.#.
.#...
.....

#####
##.##
.#.##
...##
...#.
...#.
.....

.....
#....
#....
#...#
#.#.#
#.###
#####

.....
.....
#.#..
###..
###.#
###.#
#####

.....
.....
.....
#....
#.#..
#.#.#
#####`
    expect(part1(input)).toEqual(3)
  })
})

describe("part2", () => {
  xtest("auto-completes after 49 stars", () => {})
})
