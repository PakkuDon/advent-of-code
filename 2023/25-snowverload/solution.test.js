const { part1 } = require("./solution")

describe("part1", () => {
  test("returns product of size of separated groups", () => {
    const input = `jqt: rhn xhk nvd
rsh: frs pzl lsr
xhk: hfx
cmg: qnr nvd lhk bvb
rhn: xhk bvb hfx
bvb: xhk hfx
pzl: lsr hfx nvd
qnr: nvd
ntq: jqt hfx bvb xhk
nvd: lhk
lsr: lhk
rzs: qnr cmg lsr rsh
frs: qnr lhk lsr`
    expect(part1(input)).toEqual(54)
  })
})

describe("part2", () => {
  xtest("auto-completes after 49 stars", () => {})
})
