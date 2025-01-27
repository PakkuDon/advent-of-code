const { part1, part2 } = require("./solution")

describe("part1", () => {
  const testCases = [
    {
      input: "(())",
      expected: 0,
    },
    {
      input: "()()",
      expected: 0,
    },
    {
      input: "(((",
      expected: 3,
    },
    {
      input: "(()(()(",
      expected: 3,
    },
    {
      input: "))(((((",
      expected: 3,
    },
    {
      input: "())",
      expected: -1,
    },
    {
      input: "))(",
      expected: -1,
    },
    {
      input: ")))",
      expected: -3,
    },
    {
      input: ")())())",
      expected: -3,
    },
  ]

  testCases.forEach(({ input, expected }, index) => {
    test(`example ${
      index + 1
    } - returns floor that instructions lead to`, () => {
      expect(part1(input)).toEqual(expected)
    })
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
