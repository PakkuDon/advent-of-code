const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns how many plots elf can get to in given number of steps", () => {
    const input = `...........
.....###.#.
.###.##..#.
..#.#...#..
....#.#....
.##..S####.
.##..#...#.
.......##..
.##.#.####.
.##..##.##.
...........`
    expect(part1(input, 6)).toEqual(16)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
