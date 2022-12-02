const part1 = require('./01')

describe('part1', () => {
  test('calculates score for given moves', () => {
    const input = [
      ["A", "Y"],
      ["B", "X"],
      ["C", "Z"],
    ]
    expect(part1(input)).toEqual(15)
  })
})
