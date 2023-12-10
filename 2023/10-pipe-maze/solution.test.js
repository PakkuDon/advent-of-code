const { part1, part2 } = require("./solution")

describe("part1", () => {
  const testCases = [
    {
      id: 1,
      input: `-L|F7
7S-7|
L|7||
-L-J|
L|-JF`,
      result: 4,
    },
    {
      id: 2,
      input: `7-F7-
.FJ|7
SJLL7
|F--J
LJ.LJ`,
      result: 8,
    },
  ]
  testCases.forEach(({ id, input, result }) => {
    test(`returns steps from starting point to point farthest away (id: ${id})`, () => {
      expect(part1(input)).toEqual(result)
    })
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
