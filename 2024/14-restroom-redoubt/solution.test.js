const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns safety factor after 100 seconds have passed", () => {
    const input = `p=0,4 v=3,-3
p=6,3 v=-1,-3
p=10,3 v=-1,2
p=2,0 v=2,-1
p=0,0 v=1,3
p=3,0 v=-2,-2
p=7,6 v=-1,-3
p=3,0 v=-1,-2
p=9,3 v=2,3
p=7,3 v=-1,2
p=2,4 v=2,-3
p=9,5 v=-3,-3`
    expect(part1(input, 11, 7)).toEqual(12)
  })
})

describe("part2", () => {
  xtest("no example output provided", () => {})
})
