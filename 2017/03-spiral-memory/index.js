const fs = require('fs')
const SpiralMemory = require('./spiral-memory')

const puzzleInput = fs.readFileSync('input.txt', 'utf8')
const parsedInput = parseInt(puzzleInput.trim())
console.log(SpiralMemory.calculateSteps(parsedInput))
