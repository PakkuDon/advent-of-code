const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns sum of sector ID for valid rooms", () => {
    const input = `aaaaa-bbb-z-y-x-123[abxyz]
a-b-c-d-e-f-g-h-987[abcde]
not-a-real-room-404[oarel]
totally-real-room-200[decoy]`
    expect(part1(input)).toEqual(1514)
  })
})

describe("part2", () => {
  test("returns decrypted names with corresponding sector IDs", () => {
    const input = `qzmt-zixmtkozy-ivhz-343`
    expect(part2(input)).toEqual("very encrypted name 343")
  })
})
