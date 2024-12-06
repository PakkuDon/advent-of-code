const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("it returns number of steps to access port", () => {
    const testCases = [
      {
        input: 1,
        expected: 0,
      },
      {
        input: 12,
        expected: 3,
      },
      {
        input: 23,
        expected: 2,
      },
      {
        input: 1024,
        expected: 31,
      },
    ]

    testCases.forEach(({ input, expected }) => {
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
