const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns total winnings", () => {
    const input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`
    expect(part1(input)).toEqual(6440)
  })
})

describe("part2", () => {
  test("returns total winnings when accounting for jokers", () => {
    const input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`
    expect(part2(input)).toEqual(5905)
  })
})
