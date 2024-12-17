const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("smaller example - returns final output from program", () => {
    const input = `Register A: 10
Register B: 0
Register C: 0

Program: 5,0,5,1,5,4`
    expect(part1(input)).toEqual("0,1,2")
  })

  test("returns final output from program", () => {
    const input = `Register A: 729
Register B: 0
Register C: 0

Program: 0,1,5,4,3,0`
    expect(part1(input)).toEqual("4,6,3,5,6,3,5,2,1,0")
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
