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

describe("part2", () => {
  test("returns number of IPs that support SSL", () => {
    const input = `aba[bab]xyz
xyx[xyx]xyx
aaa[kek]eke
zazbz[bzb]cdb`
    expect(part2(input)).toEqual(3)
  })
})
