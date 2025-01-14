const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns lowest house number to get given number of presents", () => {
    const testCases = [
      { input: "10", expected: 1 },
      { input: "30", expected: 2 },
      { input: "40", expected: 3 },
      { input: "70", expected: 4 },
      // Following won't pass as solution returns lowest house number
      // that receives >= input amount of presents
      // { input: '60', expected: 5 },
      { input: "120", expected: 6 },
      { input: "150", expected: 8 },
    ]

    testCases.forEach(({ input, expected }) => {
      expect(part1(input)).toEqual(expected)
    })
  })
})

describe("part2", () => {
  xtest("no example output provided", () => {})
})
