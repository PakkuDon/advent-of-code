const calculateSignal = require('./01')

describe('calculateSignal', () => {
  test('calculates resulting signals from instructions', () => {
    const instructions = [
      '123 -> x',
      '456 -> y',
      'x AND y -> d',
      'x OR y -> e',
      'x LSHIFT 2 -> f',
      'y RSHIFT 2 -> g',
      'NOT x -> h',
      'NOT y -> i',
    ]

    expect(calculateSignal(instructions, 'd')).toBe(72)
    expect(calculateSignal(instructions, 'e')).toBe(507)
    expect(calculateSignal(instructions, 'f')).toBe(492)
    expect(calculateSignal(instructions, 'g')).toBe(114)
    expect(calculateSignal(instructions, 'h')).toBe(65412)
    expect(calculateSignal(instructions, 'i')).toBe(65079)
    expect(calculateSignal(instructions, 'x')).toBe(123)
    expect(calculateSignal(instructions, 'y')).toBe(456)
  })

  test('resolves direct signal to wire', () => {
    const instructions = [
      '5 -> lx',
    ]

    expect(calculateSignal(instructions, 'lx')).toBe(5)
  })

  test('resolves signals when result stored in other wire', () => {
    const instructions = [
      '123 -> lx',
      'lx -> a',
    ]

    expect(calculateSignal(instructions, 'a')).toBe(123)
  })

  test('resolves signals when result stored in other wire and other wire is processed later', () => {
    const instructions = [
      'lx -> a',
      '123 -> lx',
    ]

    expect(calculateSignal(instructions, 'a')).toBe(123)
  })

  test('resolves signals when wire has nested operations', () => {
    const instructions = [
      'lx -> a',
      'lw OR lv -> lx',
      '12 -> lw',
      '13 -> lv'
    ]

    expect(calculateSignal(instructions, 'a')).toBe(13)
  })
})
