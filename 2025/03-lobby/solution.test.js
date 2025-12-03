const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns total of largest possible joltage each bank can produce", () => {
    const input = `987654321111111
811111111111119
234234234234278
818181911112111`
    expect(part1(input)).toEqual(357)
  })
})

describe("part2", () => {
  test("returns total of largest joltage output with 12 batteries", () => {
    const input = `987654321111111
811111111111119
234234234234278
818181911112111`
    expect(part2(input)).toEqual(3121910778619)
  })
})
