const inverseCaptcha = require("./inverse-captcha")

describe("inverse-captcha", () => {
  test("1122 returns 3", () => {
    expect(inverseCaptcha("1122")).toBe(3)
  })

  test("1111 returns 4", () => {
    expect(inverseCaptcha("1111")).toBe(4)
  })

  test("1234 returns 0", () => {
    expect(inverseCaptcha("1234")).toBe(0)
  })

  test("91212129 returns 9", () => {
    expect(inverseCaptcha("91212129")).toBe(9)
  })
})
