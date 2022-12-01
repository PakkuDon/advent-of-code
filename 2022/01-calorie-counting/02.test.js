const part2 = require('./02')

describe('part2', () => {
  test('returns total number of calories carried by top three elves with the most calories', () => {
    const input = [
      "1000",
      "2000",
      "3000",
      "",
      "4000",
      "",
      "5000",
      "6000",
      "",
      "7000",
      "8000",
      "9000",
      "",
      "10000",
    ]
    expect(part2(input)).toEqual(45000)
  })
})
