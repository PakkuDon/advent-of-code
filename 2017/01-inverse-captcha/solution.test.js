const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns sum of all digits that match next digit", () => {
    const testCases = [
      {
        input: "1122",
        expected: 3,
      },
      {
        input: "1111",
        expected: 4,
      },
      {
        input: "1234",
        expected: 0,
      },
      {
        input: "91212129",
        expected: 9,
      },
    ]
    testCases.forEach(({ input, expected }) => {
      expect(part1(input)).toEqual(expected)
    })
  })
})

describe("part2", () => {
  test("returns sum of all digits that match digit halfway around", () => {
    const testCases = [
      {
        input: "1212",
        expected: 6,
      },
      {
        input: "1221",
        expected: 0,
      },
      {
        input: "123425",
        expected: 4,
      },
      {
        input: "123123",
        expected: 12,
      },
      {
        input: "12131415",
        expected: 4,
      },
    ]
    testCases.forEach(({ input, expected }) => {
      expect(part2(input)).toEqual(expected)
    })
  })
})
