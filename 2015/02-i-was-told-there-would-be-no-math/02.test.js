const calculateRibbonRequired = require("./02")

describe("calculateRibbonRequired", () => {
  test("dimensions 2x3x4 requires 34 feet", () => {
    expect(calculateRibbonRequired({ width: 2, height: 3, length: 4 })).toEqual(
      34
    )
  })

  test("dimensions 1x1x10 requires 14 feet", () => {
    expect(
      calculateRibbonRequired({ width: 1, height: 1, length: 10 })
    ).toEqual(14)
  })
})
