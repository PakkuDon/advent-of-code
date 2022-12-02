const part2 = require('./02')

describe('part2', () => {
  test('calculates score for given moves', () => {
    const input = [
      ["A", "Y"],
      ["B", "X"],
      ["C", "Z"],
    ]
    expect(part2(input)).toEqual(12)
  })
})
