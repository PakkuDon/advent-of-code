const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of ingredient IDs that are fresh", () => {
    const input = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`
    expect(part1(input)).toEqual(3)
  })
})

describe("part2", () => {
  test("returns number of ingredient IDs within ranges", () => {
    const input = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`
    expect(part2(input)).toEqual(14)
  })
})
