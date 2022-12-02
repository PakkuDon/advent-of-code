const fs = require('fs')
const path = require('path')
const part1 = require('./01')
const part2 = require('./02')

const puzzleInput = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
const moves = puzzleInput.trim().split('\n').map(row => row.split(" "))

console.log(`Part 1: ${part1(moves)}`)
console.log(`Part 2: ${part2(moves)}`)
