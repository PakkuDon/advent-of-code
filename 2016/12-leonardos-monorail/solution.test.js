const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns value of register a after processing instructions", () => {
    const input = `cpy 41 a
inc a
inc a
dec a
jnz a 2
dec a`
    expect(part1(input)).toEqual(42)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
