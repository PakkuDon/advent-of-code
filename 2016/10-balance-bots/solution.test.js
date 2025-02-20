const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of bot responsible for comparing given values", () => {
    const input = `value 5 goes to bot 2
bot 2 gives low to bot 1 and high to bot 0
value 3 goes to bot 1
bot 1 gives low to output 1 and high to bot 0
bot 0 gives low to output 2 and high to output 0
value 2 goes to bot 2`

    expect(part1(input, 2, 5)).toEqual(2)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
