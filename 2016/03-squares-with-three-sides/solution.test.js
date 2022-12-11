const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns count of triangles with valid sides", () => {
    const input = ["5 10 25"]
    expect(part1(input)).toEqual(0)
  })
})

describe("part2", () => {
  test("returns count of triangles with valid sides when lengths counted vertically", () => {
    const input = [
      "101 301 501",
      "102 302 502",
      "103 303 503",
      "201 401 601",
      "202 402 602",
      "203 403 603",
    ]
    expect(part2(input)).toEqual(6)
  })
})
