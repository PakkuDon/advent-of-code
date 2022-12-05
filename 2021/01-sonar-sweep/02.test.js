const countDepthIncreasesWithWindow = require("./02")

describe("countDepthIncreasesWithWindow", () => {
  test("returns number of depth increases counted by window", () => {
    const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
    expect(countDepthIncreasesWithWindow(input)).toEqual(5)
  })
})
