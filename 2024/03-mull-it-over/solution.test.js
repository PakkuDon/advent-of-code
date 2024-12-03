const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns result of instructions", () => {
    const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
    expect(part1(input)).toEqual(161)
  })
})

describe("part2", () => {
  test("returns result of instructions", () => {
    const input = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`
    expect(part2(input)).toEqual(48)
  })
})
