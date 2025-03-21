const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns minimum number of steps to reach exit", () => {
    const input = `5,4
4,2
4,5
3,0
2,1
6,3
2,4
1,5
0,6
3,3
2,6
5,1
1,2
5,5
2,5
6,5
1,4
0,4
6,4
1,1
6,1
1,0
0,5
1,6
2,0`
    expect(part1(input, 6, 12)).toEqual(22)
  })
})

describe("part2", () => {
  test("returns coordinates for first byte that will block path to exit", () => {
    const input = `5,4
4,2
4,5
3,0
2,1
6,3
2,4
1,5
0,6
3,3
2,6
5,1
1,2
5,5
2,5
6,5
1,4
0,4
6,4
1,1
6,1
1,0
0,5
1,6
2,0`
    expect(part2(input, 6)).toEqual("6,1")
  })
})
