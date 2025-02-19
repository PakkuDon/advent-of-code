const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns password for given Door ID", () => {
    const input = `abc`
    expect(part1(input)).toEqual("18f47a30")
  })
})

describe("part2", () => {
  test("returns password for given Door ID using updated algorithm", () => {
    const input = `abc`
    expect(part2(input)).toEqual("05ace8e3")
  })
})
