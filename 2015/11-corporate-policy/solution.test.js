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

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
