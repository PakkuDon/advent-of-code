const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns result of scrambling input string", () => {
    const input = `swap position 4 with position 0
swap letter d with letter b
reverse positions 0 through 4
rotate left 1 step
move position 1 to position 4
move position 3 to position 0
rotate based on position of letter b
rotate based on position of letter d`
    expect(part1(input, "abcde")).toEqual("decab")
  })
})

describe("part2", () => {
  xtest("no example output provided", () => {})
})
