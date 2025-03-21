const { part1, part2 } = require("./solution")

describe("part1", () => {
  const testCases = [
    {
      input: "ADVENT",
      expected: 6,
    },
    {
      input: "A(1x5)BC",
      expected: 7,
    },
    {
      input: "(3x3)XYZ",
      expected: 9,
    },
    {
      input: "A(2x2)BCD(2x2)EFG",
      expected: 11,
    },
    {
      input: "(6x1)(1x3)A",
      expected: 6,
    },
    {
      input: "X(8x2)(3x3)ABCY",
      expected: 18,
    },
  ]

  testCases.forEach(({ input, expected }) => {
    test(`example ${input} - returns decompressed length`, () => {
      expect(part1(input)).toEqual(expected)
    })
  })
})

describe("part2", () => {
  const testCases = [
    {
      input: "(3x3)XYZ",
      expected: 9,
    },
    {
      input: "X(8x2)(3x3)ABCY",
      expected: 20,
    },
    {
      input: "(27x12)(20x12)(13x14)(7x10)(1x12)A",
      expected: 241920,
    },
    {
      input: "(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN",
      expected: 445,
    },
  ]

  testCases.forEach(({ input, expected }) => {
    test(`example ${input} - returns recursively decompressed length`, () => {
      expect(part2(input)).toEqual(expected)
    })
  })
})
