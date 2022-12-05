const countDepthIncreases = require("./01")

describe("countDepthIncreases", () => {
  test("returns number of depth increases in readings", () => {
    const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
    expect(countDepthIncreases(input)).toEqual(7)
  })
})
