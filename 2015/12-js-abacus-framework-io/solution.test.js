const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns sum of all numbers in document", () => {
    const testCases = [
      {
        input: "[1,2,3]",
        expected: 6,
      },
      {
        input: `{"a":2,"b":4}`,
        expected: 6,
      },
      {
        input: "[[[3]]]",
        expected: 3,
      },
      {
        input: `{"a":{"b":4},"c":-1}`,
        expected: 3,
      },
      {
        input: `{"a":[-1,1]}`,
        expected: 0,
      },
      {
        input: `[-1,{"a":1}]`,
        expected: 0,
      },
      {
        input: "[]",
        expected: 0,
      },
      {
        input: "{}",
        expected: 0,
      },
    ]
    testCases.forEach(({ input, expected }) => {
      expect(part1(input)).toEqual(expected)
    })
  })
})

describe("part2", () => {
  test("returns sum of all numbers excluding objects containing value 'red'", () => {
    const testCases = [
      {
        input: "[1,2,3]",
        expected: 6,
      },
      {
        input: `[1,{"c":"red","b":2},3]`,
        expected: 4,
      },
      {
        input: `{"d":"red","e":[1,2,3,4],"f":5}`,
        expected: 0,
      },
      {
        input: `[1,"red",5]`,
        expected: 6,
      },
    ]
    testCases.forEach(({ input, expected }) => {
      expect(part2(input)).toEqual(expected)
    })
  })
})
