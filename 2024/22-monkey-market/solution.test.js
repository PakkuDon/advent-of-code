const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns sum of 2000th secret number for each buyer ", () => {
    const input = `1
10
100
2024`
    expect(part1(input)).toEqual(37327623n)
  })
})

describe("part2", () => {
  test("returns most bananas we can get ", () => {
    const input = `1
2
3
2024`
    // expect(part2("123")).toEqual(24)
    expect(part2(input)).toEqual(23)
  })
})
