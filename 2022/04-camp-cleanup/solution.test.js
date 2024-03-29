const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns how many assignment pairs contain another", () => {
    const input = [
      "2-4,6-8",
      "2-3,4-5",
      "5-7,7-9",
      "2-8,3-7",
      "6-6,4-6",
      "2-6,4-8",
    ]
    expect(part1(input)).toEqual(2)
  })
})

describe("part2", () => {
  test("returns how many assignment pairs have overlapping ranges", () => {
    const input = [
      "2-4,6-8",
      "2-3,4-5",
      "5-7,7-9",
      "2-8,3-7",
      "6-6,4-6",
      "2-6,4-8",
    ]
    expect(part2(input)).toEqual(4)
  })
})
