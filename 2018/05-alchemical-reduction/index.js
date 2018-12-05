const fs = require('fs')
const part1 = require('./01')

const puzzleInput = fs.readFileSync('./input.txt', 'utf8').trim()
console.log('Part 1')
console.log(part1(puzzleInput))
