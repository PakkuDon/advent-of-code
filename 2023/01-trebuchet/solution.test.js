const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns sum of callibration values", () => {
    const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`
    expect(part1(input)).toEqual(142)
  })
})

describe("part2", () => {
  test("returns sum of callibration values including words", () => {
    const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`
    expect(part2(input)).toEqual(281)
  })
})
