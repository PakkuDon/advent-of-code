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

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
