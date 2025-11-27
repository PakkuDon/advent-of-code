const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns first number in sequence that is not a sum of n numbers", () => {
    const input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`
    expect(part1(input, 5)).toEqual(127)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
