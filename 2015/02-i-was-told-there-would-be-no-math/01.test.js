const calculatePaperRequired = require("./01")

describe("calculatePaperRequired", () => {
  test("dimensions 2x3x4 requires 58 square feet", () => {
    expect(calculatePaperRequired({ width: 2, height: 3, length: 4 })).toEqual(
      58
    )
  })

  test("dimensions 1x1x10 requires 43 feet", () => {
    expect(calculatePaperRequired({ width: 1, height: 1, length: 10 })).toEqual(
      43
    )
  })
})
