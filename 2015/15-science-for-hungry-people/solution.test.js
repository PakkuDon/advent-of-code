const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns score of highest-scoring cookie", () => {
    const input = `Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3`
    expect(part1(input)).toEqual(62842880)
  })
})

describe("part2", () => {
  test("returns score of highest-scoring cookie with 500 calories", () => {
    const input = `Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3`
    expect(part2(input)).toEqual(57600000)
  })
})
