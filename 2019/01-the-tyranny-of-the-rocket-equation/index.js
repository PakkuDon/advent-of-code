const fs = require('fs')
const calculateFuelRequired = require('./01')

const puzzleInput = fs.readFileSync('./input.txt', 'utf8')
const moduleMasses = puzzleInput
  .trim()
  .split('\n')
  .map(value => parseInt(value, 10))

const sumOfFuelRequirements = moduleMasses
  .map(mass => calculateFuelRequired(mass))
  .reduce((total, currentMass) => total + currentMass, 0)

console.log(`Part 1: ${sumOfFuelRequirements}`)

