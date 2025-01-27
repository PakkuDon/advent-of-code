const { part1, part2 } = require("./solution")

describe("part1", () => {
  const testCases = [
    {
      input: "abcdef",
      expected: 609043,
    },
    {
      input: "pqrstuv",
      expected: 1048970,
    },
  ]

  testCases.forEach(({ input, expected }, index) => {
    test(`example ${
      index + 1
    } - returns lowest number that produces hash starting with 5 zeroes`, () => {
      expect(part1(input)).toEqual(expected)
    })
  })
})

describe("part2", () => {
  xtest("no example output provided", () => {})
})
