const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns how many steps it takes to reach ZZZ", () => {
    const input = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`
    expect(part1(input)).toEqual(2)
  })

  test("returns how many steps it takes to reach ZZZ (2nd example)", () => {
    const input = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`
    expect(part1(input)).toEqual(6)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
