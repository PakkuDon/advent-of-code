const calculateLifeSupportRating = require("./02")

describe("calculateLifeSupportRating", () => {
  test("calculates life support rating from instructions", () => {
    const input = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ]
    expect(calculateLifeSupportRating(input)).toEqual(230)
  })
})
