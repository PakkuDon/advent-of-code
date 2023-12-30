const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns distance for shortest possible route", () => {
    const input = `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141`
    expect(part1(input)).toEqual(605)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
