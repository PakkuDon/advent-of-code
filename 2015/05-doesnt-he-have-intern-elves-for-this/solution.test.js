const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns how many strings are nice", () => {
    const input = `ugknbfddgicrmopn
aaa
jchzalrnumimnmhp
haegwjzuvuyypxyu
dvszwmarrgswjxmb`
    expect(part1(input)).toEqual(2)
  })
})

describe("part2", () => {
  test("returns how many strings are nice with new rules", () => {
    const input = `qjhvhtzxzqqjkmpb
xxyxx
uurcxstgmygtbstg
ieodomkazucvgmuy`
    expect(part2(input)).toEqual(2)
  })
})
