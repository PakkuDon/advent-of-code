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

describe("part2", () => {
  test("returns how many steps it takes to land on nodes ending with Z", () => {
    const input = `LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`
    expect(part2(input)).toEqual(6)
  })
})
