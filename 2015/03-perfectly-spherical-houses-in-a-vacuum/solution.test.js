const { part1, part2 } = require("./solution")

describe("part1", () => {
  const testCases = [
    {
      input: ">",
      expected: 2,
    },
    {
      input: "^>v<",
      expected: 4,
    },
    {
      input: "^v^v^v^v^v",
      expected: 2,
    },
  ]

  testCases.forEach(({ input, expected }, index) => {
    test(`example ${
      index + 1
    } - returns how many houses receive presents`, () => {
      expect(part1(input)).toEqual(expected)
    })
  })
})

describe("part2", () => {
  const testCases = [
    {
      input: "^v",
      expected: 3,
    },
    {
      input: "^>v<",
      expected: 3,
    },
    {
      input: "^v^v^v^v^v",
      expected: 11,
    },
  ]

  testCases.forEach(({ input, expected }, index) => {
    test(`example ${
      index + 1
    } - returns how many houses receive presents`, () => {
      expect(part2(input)).toEqual(expected)
    })
  })
})
