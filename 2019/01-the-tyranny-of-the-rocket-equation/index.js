const fs = require('fs')
const path = require('path')
const calculateFuelRequired = require('./01')
const calculateFuelRequiredWithFuel = require('./02')

const puzzleInput = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
const moduleMasses = puzzleInput
  .trim()
  .split('\n')
  .map(value => parseInt(value, 10))

const sumOfFuelRequirements = moduleMasses
  .map(mass => calculateFuelRequired(mass))
  .reduce((total, currentMass) => total + currentMass, 0)

const sumOfFuelRequirementsIncludingFuel = moduleMasses
  .map(mass => calculateFuelRequiredWithFuel(mass))
  .reduce((total, currentMass) => total + currentMass, 0)

console.log(`Part 1: ${sumOfFuelRequirements}`)
console.log(`Part 2: ${sumOfFuelRequirementsIncludingFuel}`)

