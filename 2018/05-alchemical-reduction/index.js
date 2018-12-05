const fs = require('fs')
const part1 = require('./01')
const part2 = require('./02')

const puzzleInput = fs.readFileSync('./input.txt', 'utf8').trim()
console.log('Part 1')
console.log(part1(puzzleInput))
console.log('Part 2')
console.log(part2(puzzleInput))
