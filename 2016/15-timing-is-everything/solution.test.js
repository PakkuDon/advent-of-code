const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns first time to press that awards capsule", () => {
    const input = `Disc #1 has 5 positions; at time=0, it is at position 4.
Disc #2 has 2 positions; at time=0, it is at position 1.`
    expect(part1(input)).toEqual(5)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
