const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns error-corrected version of message", () => {
    const input = `eedadn
drvtee
eandsr
raavrd
atevrs
tsrnev
sdttsa
rasrtv
nssdts
ntnada
svetve
tesnvt
vntsnd
vrdear
dvrsen
enarar`
    expect(part1(input)).toEqual("easter")
  })
})

describe("part2", () => {
  test("returns error-corrected version of message with updated algorithm", () => {
    const input = `eedadn
drvtee
eandsr
raavrd
atevrs
tsrnev
sdttsa
rasrtv
nssdts
ntnada
svetve
tesnvt
vntsnd
vrdear
dvrsen
enarar`
    expect(part2(input)).toEqual("advent")
  })
})
