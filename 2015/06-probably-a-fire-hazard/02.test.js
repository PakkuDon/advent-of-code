const getTotalBrightness = require("./02")

describe("getTotalBrightness", () => {
  test("turn on 0,0 through 0,0 increases the total brightness by 1", () => {
    expect(getTotalBrightness(["turn on 0,0 through 0,0"])).toBe(1)
  })

  test("toggle 0,0 through 999,999 increases total brightness by 2000000", () => {
    expect(getTotalBrightness(["toggle 0,0 through 999,999"])).toBe(2000000)
  })
})
