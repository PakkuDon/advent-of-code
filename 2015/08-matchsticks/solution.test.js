const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns source length minus characters in memory", () => {
    const input = String.raw`""
"abc"
"aaa\"aaa"
"\x27"`
    expect(part1(input)).toEqual(12)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
