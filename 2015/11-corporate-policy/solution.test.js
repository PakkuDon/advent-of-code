const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns next valid password given current password", () => {
    const testCases = [
      {
        input: "abcdefgh",
        expectedResult: "abcdffaa",
      },
      {
        input: "ghijklmn",
        expectedResult: "ghjaabcc",
      },
    ]

    testCases.forEach(({ input, expectedResult }) => {
      expect(part1(input)).toEqual(expectedResult)
    })
  })
})

describe("part2", () => {
  xtest("no example output provided", () => {})
})
