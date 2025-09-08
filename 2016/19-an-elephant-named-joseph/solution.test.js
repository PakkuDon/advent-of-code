const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns which elf gets all the presents", () => {
    const input = `5`
    expect(part1(input)).toEqual(3)
  })
})

describe("part2", () => {
  test("returns which elf gets all the presents in new algorithm", () => {
    const input = `5`
    expect(part2(input)).toEqual(2)
  })
})
