const chronalCalibration = require("./01-chronal-calibration")

describe("Chronal Calibration", () => {
  test("+1, +1, +1 returns 3", () => {
    const input = [1, 1, 1]
    expect(chronalCalibration(input)).toBe(3)
  })

  test("+1, +1, -2 returns 0", () => {
    const input = [+1, +1, -2]
    expect(chronalCalibration(input)).toBe(0)
  })

  test("-1, -2, -3 returns -6", () => {
    const input = [-1, -2, -3]
    expect(chronalCalibration(input)).toBe(-6)
  })
})
