const SpiralMemory = require("./spiral-memory")

describe("spiral-memory", () => {
  test("1 returns 0", () => {
    expect(SpiralMemory.calculateSteps(1)).toBe(0)
  })

  test("12 returns 3", () => {
    expect(SpiralMemory.calculateSteps(12)).toBe(3)
  })

  test("23 returns 2", () => {
    expect(SpiralMemory.calculateSteps(23)).toBe(2)
  })

  test("1024 returns 31", () => {
    expect(SpiralMemory.calculateSteps(1024)).toBe(31)
  })
})
