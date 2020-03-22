const fs = require('fs')
const path = require('path')
const getNumberOfLightsSwitchedOn = require('./01')
const getTotalBrightness = require('./02')

const puzzleInput = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
const instructions = puzzleInput
  .trim()
  .split('\n')

const numberOfLightsSwitchedOn = getNumberOfLightsSwitchedOn(instructions)
const totalBrightness = getTotalBrightness(instructions)

console.log(`Part 1: ${numberOfLightsSwitchedOn}`)
console.log(`Part 2: ${totalBrightness}`)
