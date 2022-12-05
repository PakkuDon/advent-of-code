const calculatePowerConsumption = require("./01")

describe("calculatePowerConsumption", () => {
  test("calculates power consumption from instructions", () => {
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
    expect(calculatePowerConsumption(input)).toEqual(198)
  })
})
