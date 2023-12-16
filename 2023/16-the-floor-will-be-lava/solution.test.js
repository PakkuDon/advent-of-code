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

describe("part2", () => {
  test("returns max number of tiles that can be energised in any configuration", () => {
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
    expect(part2(input)).toEqual(51)
  })
})
