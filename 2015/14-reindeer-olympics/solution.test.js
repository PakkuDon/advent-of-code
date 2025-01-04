const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns distance winning reindeer has travelled after given seconds", () => {
    const input = `Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.`
    expect(part1(input, 1000)).toEqual(1120)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
