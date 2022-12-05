const isNiceString = require("./01")

describe("isNiceString", () => {
  test("ugknbfddgicrmopn is nice", () => {
    expect(isNiceString("ugknbfddgicrmopn")).toBe(true)
  })

  test("aaa is nice", () => {
    expect(isNiceString("aaa")).toBe(true)
  })

  test("jchzalrnumimnmhp is not nice", () => {
    expect(isNiceString("jchzalrnumimnmhp")).toBe(false)
  })

  test("haegwjzuvuyypxyu is not nice", () => {
    expect(isNiceString("haegwjzuvuyypxyu")).toBe(false)
  })

  test("dvszwmarrgswjxmb is not nice", () => {
    expect(isNiceString("dvszwmarrgswjxmb")).toBe(false)
  })
})
