const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns the number of passwords valid according to their policies", () => {
    const input = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"]
    expect(part1(input)).toEqual(2)
  })
})

describe("part2", () => {
  test("returns something", () => {
    const input = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"]
    expect(part2(input)).toEqual(1)
  })
})
