const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns how many times XMAS appears", () => {
    const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`
    expect(part1(input)).toEqual(18)
  })
})

describe("part2", () => {
  test("returns how many times X-MAS appears", () => {
    const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`
    expect(part2(input)).toEqual(9)
  })
})
