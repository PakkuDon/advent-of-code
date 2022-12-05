const chronalCalibration = require("./02-chronal-calibration")

describe("Chronal Calibration", () => {
  test("+1, -1 returns 0", () => {
    const input = [+1, -1]
    expect(chronalCalibration(input)).toBe(0)
  })

  test("+3, +3, +4, -2, -4 returns 10", () => {
    const input = [+3, +3, +4, -2, -4]
    expect(chronalCalibration(input)).toBe(10)
  })

  test("-6, +3, +8, +5, -6 returns 5", () => {
    const input = [-6, +3, +8, +5, -6]
    expect(chronalCalibration(input)).toBe(5)
  })

  test("+7, +7, -2, -7, -4 returns 14", () => {
    const input = [+7, +7, -2, -7, -4]
    expect(chronalCalibration(input)).toBe(14)
  })
})
