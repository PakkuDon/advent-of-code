const calculateFuelRequiredIncludingFuel = require("./02")

describe("calculateFuelRequiredIncludingFuel", () => {
  test("mass of 14 requires 2 fuel", () => {
    expect(calculateFuelRequiredIncludingFuel(14)).toEqual(2)
  })

  test("mass of 1969 requires 966 fuel", () => {
    expect(calculateFuelRequiredIncludingFuel(1969)).toEqual(966)
  })

  test("mass of 100756 requires 33583 fuel", () => {
    expect(calculateFuelRequiredIncludingFuel(100756)).toEqual(50346)
  })
})
