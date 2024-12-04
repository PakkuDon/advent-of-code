const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns sum of counts of unique yes responses", () => {
    const input = `abc

a
b
c

ab
ac

a
a
a
a

b`
    expect(part1(input)).toEqual(11)
  })
})

describe("part2", () => {
  test("returns sum of counts where everyone said yes", () => {
    const input = `abc

a
b
c

ab
ac

a
a
a
a

b`
    expect(part2(input)).toEqual(6)
  })
})
