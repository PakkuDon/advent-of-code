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

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
