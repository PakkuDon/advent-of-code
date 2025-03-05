const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns which elf gets all the presents", () => {
    const input = `5`
    expect(part1(input)).toEqual(3)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
