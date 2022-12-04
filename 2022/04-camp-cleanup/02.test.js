const part2 = require('./02')

describe('part2', () => {
  test('returns how many assignment pairs have overlapping ranges', () => {
    const input = [
      "2-4,6-8",
      "2-3,4-5",
      "5-7,7-9",
      "2-8,3-7",
      "6-6,4-6",
      "2-6,4-8",
    ]
    expect(part2(input)).toEqual(4)
  })
})
