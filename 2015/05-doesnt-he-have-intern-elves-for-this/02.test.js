const isNiceString = require("./02")

describe("isNiceString", () => {
  test("qjhvhtzxzqqjkmpb is nice", () => {
    expect(isNiceString("qjhvhtzxzqqjkmpb")).toBe(true)
  })

  test("xxyxx is nice", () => {
    expect(isNiceString("xxyxx")).toBe(true)
  })

  test("uurcxstgmygtbstg is not nice", () => {
    expect(isNiceString("uurcxstgmygtbstg")).toBe(false)
  })

  test("ieodomkazucvgmuy is not nice", () => {
    expect(isNiceString("ieodomkazucvgmuy")).toBe(false)
  })
})
