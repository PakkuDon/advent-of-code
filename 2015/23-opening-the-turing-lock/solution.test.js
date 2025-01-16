const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns value in specified register after executing instructions", () => {
    const input = `inc a
jio a, +2
tpl a
inc a`
    expect(part1(input, "a")).toEqual(2)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
