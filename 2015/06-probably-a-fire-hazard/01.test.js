const getNumberOfLightsSwitchedOn = require("./01")

describe("getNumberOfLightsSwitchedOn", () => {
  test("turn on 0,0 through 999,999 turns on 1000000 lights", () => {
    expect(getNumberOfLightsSwitchedOn(["turn on 0,0 through 999,999"])).toBe(
      1000000
    )
  })

  test("toggle 0,0 through 999,0 turns on 1000 lights", () => {
    expect(getNumberOfLightsSwitchedOn(["toggle 0,0 through 999,0"])).toBe(1000)
  })

  test("turn off 499,499 through 500,500 turns on 0 lights", () => {
    expect(
      getNumberOfLightsSwitchedOn(["turn off 499,499 through 500,500"])
    ).toBe(0)
  })

  test("test instructions turn on 998996 lights", () => {
    const instructions = [
      "turn on 0,0 through 999,999",
      "toggle 0,0 through 999,0",
      "turn off 499,499 through 500,500",
    ]
    expect(getNumberOfLightsSwitchedOn(instructions)).toBe(998996)
  })
})
