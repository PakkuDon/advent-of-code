const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns sum of results for hash algorithm", () => {
    const input = `rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7`
    expect(part1(input)).toEqual(1320)
  })
})

describe("part2", () => {
  test("returns focusing power given resulting lens configuration", () => {
    const input = `rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7`
    expect(part2(input)).toEqual(145)
  })
})
