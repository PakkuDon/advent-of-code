const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("a - returns least mana required to defeat boss", () => {
    const input = `Hit Points: 13
Damage: 8`
    expect(part1(input, { hp: 10, mana: 250, armor: 0 })).toEqual(226)
  })

  test("b - returns least mana required to defeat boss", () => {
    const input = `Hit Points: 14
Damage: 8`
    expect(part1(input, { hp: 10, mana: 250, armor: 0 })).toEqual(641)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
