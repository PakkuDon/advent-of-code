const calculateFuelRequired = require("./01")

describe("calculateFuelRequired", () => {
  test("mass of 12 requires 2 fuel", () => {
    expect(calculateFuelRequired(12)).toEqual(2)
  })

  test("mass of 14 requires 2 fuel", () => {
    expect(calculateFuelRequired(14)).toEqual(2)
  })

  test("mass of 1969 requires 654 fuel", () => {
    expect(calculateFuelRequired(1969)).toEqual(654)
  })

  test("mass of 100756 requires 33583 fuel", () => {
    expect(calculateFuelRequired(100756)).toEqual(33583)
  })
})
