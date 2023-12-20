const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns product of high and low pulses sent after 1000 button presses (first)", () => {
    const input = `broadcaster -> a, b, c
%a -> b
%b -> c
%c -> inv
&inv -> a`
    expect(part1(input)).toEqual(32000000)
  })

  test("returns product of high and low pulses sent after 1000 button presses (second)", () => {
    const input = `broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output`
    expect(part1(input)).toEqual(11687500)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
