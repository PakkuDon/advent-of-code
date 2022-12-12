const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("R2, L3", () => {
    const input = "R2, L3"
    expect(part1(input)).toEqual(5)
  })

  test("R2, R2, R2", () => {
    const input = "R2, R2, R2"
    expect(part1(input)).toEqual(2)
  })

  test("R5, L5, R5, R3", () => {
    const input = "R5, L5, R5, R3"
    expect(part1(input)).toEqual(12)
  })
})

describe("part2", () => {
  test("returns distance of first block visited twice", () => {
    const input = "R8, R4, R4, R8"
    expect(part2(input)).toEqual(4)
  })
})
