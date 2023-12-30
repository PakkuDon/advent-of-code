const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns result after processing input given number of times", () => {
    const input = `1`
    expect(part1(input, 1)).toEqual("11")
    expect(part1(input, 2)).toEqual("21")
    expect(part1(input, 3)).toEqual("1211")
    expect(part1(input, 4)).toEqual("111221")
    expect(part1(input, 5)).toEqual("312211")
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
