const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns sum of worksheet", () => {
    const input = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `
    expect(part1(input)).toEqual(4277556)
  })
})

describe("part2", () => {
  test("returns sum of worksheet using new formula", () => {
    const input = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `
    expect(part2(input)).toEqual(3263827)
  })
})
