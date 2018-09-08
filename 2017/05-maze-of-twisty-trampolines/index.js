const fs = require('fs')
const TwistyTrampolines = require('./02-maze-of-twisty-trampolines')

const rawPuzzleInput = fs.readFileSync('./input.txt', 'utf8')
const steps = rawPuzzleInput.trim().split('\n').map(digit => Number(digit))

console.log(TwistyTrampolines.call(steps))
