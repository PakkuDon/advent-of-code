const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns minimum number of tokens to win all prizes", () => {
    const input = `Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=8400, Y=5400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=12748, Y=12176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=7870, Y=6450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=18641, Y=10279`
    expect(part1(input)).toEqual(480)
  })
})

describe("part2", () => {
  xtest("no example output provided", () => {})
})
