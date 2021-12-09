const fs = require('fs')
const path = require('path')
const calculatePowerConsumption = require('./01')

const puzzleInput = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split('\n')

console.log(`Part 1: ${calculatePowerConsumption(puzzleInput)}`)
