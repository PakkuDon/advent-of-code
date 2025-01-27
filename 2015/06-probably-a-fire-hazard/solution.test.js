const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of lights lit after instructions", () => {
    const input = `turn on 0,0 through 999,999
toggle 0,0 through 999,0
turn off 499,499 through 500,500`
    expect(part1(input)).toEqual(998996)
  })
})

describe("part2", () => {
  test("returns total brightness after instructions", () => {
    const input = `toggle 0,0 through 999,999`
    expect(part2(input)).toEqual(2000000)
  })
})
