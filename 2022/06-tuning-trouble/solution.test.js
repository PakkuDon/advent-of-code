const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns 7", () => {
    const input = "mjqjpqmgbljsphdztnvjfqwrcgsmlb"
    expect(part1(input)).toEqual(7)
  })

  test("returns 5", () => {
    const input = "bvwbjplbgvbhsrlpgdmjqwftvncz"
    expect(part1(input)).toEqual(5)
  })

  test("returns 6", () => {
    const input = "nppdvjthqldpwncqszvftbrmjlhg"
    expect(part1(input)).toEqual(6)
  })

  test("returns 10", () => {
    const input = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"
    expect(part1(input)).toEqual(10)
  })
  
  test("returns 11", () => {
    const input = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"
    expect(part1(input)).toEqual(11)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = "mjqjpqmgbljsphdztnvjfqwrcgsmlb"
    expect(part2(input)).toEqual(0)
  })
})
