const parser = require('./01')

describe('parser', () => {
  test('1,9,10,3,2,3,11,0,99,30,40,50 becomes 3500,9,10,70,2,3,11,0,99,30,40,50', () => {
    const input = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50]
    const expected = [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]

    expect(parser(input)).toEqual(expected)
  })

  test('1,0,0,0,99 becomes 2,0,0,0,99', () => {
    const input = [1, 0, 0, 0, 99]
    const expected = [2, 0, 0, 0, 99]

    expect(parser(input)).toEqual(expected)
  })

  test('2,3,0,3,99 becomes 2,3,0,6,99', () => {
    const input = [2, 3, 0, 3, 99]
    const expected = [2, 3, 0, 6, 99]

    expect(parser(input)).toEqual(expected)
  })

  test('2,4,4,5,99,0 becomes 2,4,4,5,99,9801', () => {
    const input = [2, 4, 4, 5, 99, 0]
    const expected = [2, 4, 4, 5, 99, 9801]

    expect(parser(input)).toEqual(expected)
  })

  test('1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99', () => {
    const input = [1, 1, 1, 4, 99, 5, 6, 0, 99]
    const expected = [30, 1, 1, 4, 2, 5, 6, 0, 99]

    expect(parser(input)).toEqual(expected)
  })
})
