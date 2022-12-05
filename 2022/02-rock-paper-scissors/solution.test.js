const { part1, part2 } = require('./solution')

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
