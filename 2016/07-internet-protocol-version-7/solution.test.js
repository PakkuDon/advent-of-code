const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of IPs that support TLS", () => {
    const input = `abba[mnop]qrst
abcd[bddb]xyyx
aaaa[qwer]tyui
ioxxoj[asdfgh]zxcvbn`
    expect(part1(input)).toEqual(2)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
