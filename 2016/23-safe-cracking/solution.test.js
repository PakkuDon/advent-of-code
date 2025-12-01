const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns value in register a", () => {
    const input = `cpy 2 a
tgl a
tgl a
tgl a
cpy 1 a
dec a
dec a`
    expect(part1(input)).toEqual(3)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
