const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns value of accumulator before any instruction is executed a second time", () => {
    const input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`
    expect(part1(input)).toEqual(5)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
