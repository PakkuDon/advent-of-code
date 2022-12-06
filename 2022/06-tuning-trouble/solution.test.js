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

describe("part2", () => {
  test("returns 19", () => {
    const input = "mjqjpqmgbljsphdztnvjfqwrcgsmlb"
    expect(part2(input)).toEqual(19)
  })

  test("returns 23", () => {
    const input = "bvwbjplbgvbhsrlpgdmjqwftvncz"
    expect(part2(input)).toEqual(23)
  })

  test("returns 23", () => {
    const input = "nppdvjthqldpwncqszvftbrmjlhg"
    expect(part2(input)).toEqual(23)
  })

  test("returns 29", () => {
    const input = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"
    expect(part2(input)).toEqual(29)
  })

  test("returns 26", () => {
    const input = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"
    expect(part2(input)).toEqual(26)
  })
})
