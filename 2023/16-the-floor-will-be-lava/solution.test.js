const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns how many tiles have been energised", () => {
    const input = String.raw`.|...\....
|.-.\.....
.....|-...
........|.
..........
.........\
..../.\\..
.-.-/..|..
.|....-|.\
..//.|....`
    expect(part1(input)).toEqual(46)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
