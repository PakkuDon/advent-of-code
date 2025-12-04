const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns how many rolls can be accessed by a forklift", () => {
    const input = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`
    expect(part1(input)).toEqual(13)
  })
})

describe("part2", () => {
  test("returns how many rolls of paper can be removed", () => {
    const input = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`
    expect(part2(input)).toEqual(43)
  })
})
