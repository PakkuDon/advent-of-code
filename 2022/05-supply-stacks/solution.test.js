const { part1, part2 } = require('./solution')

describe('part1', () => {
  test('returns something', () => {
    const input = `    [D]     
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
`
    expect(part1(input)).toEqual("CMZ")
  })
})

xdescribe('part2', () => {
  test('returns something', () => {
    const input = `    [D]     
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
`
    expect(part2(input)).toEqual(0)
  })
})
