const fs = require('fs')
const path = require('path')
const getNumberOfLightsSwitchedOn = require('./01')

const puzzleInput = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
const instructions = puzzleInput
  .trim()
  .split('\n')

const numberOfLightsSwitchedOn = getNumberOfLightsSwitchedOn(instructions)

console.log(`Part 1: ${numberOfLightsSwitchedOn}`)
