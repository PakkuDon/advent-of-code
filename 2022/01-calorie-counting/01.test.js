const part1 = require('./01')

describe('part1', () => {
  test('returns highest number of calories carried by an elf', () => {
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
    expect(part1(input)).toEqual(24000)
  })
})
