const fs = require('fs')
const path = require('path')
const getNumberOfHousesVisited = require('./01')

const puzzleInput = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
const directions = puzzleInput
  .trim()
  .split('')

const numberOfHousesVisited = getNumberOfHousesVisited(directions)

console.log(`Part 1: ${numberOfHousesVisited}`)
