const fs = require('fs')
const path = require('path')
const parser = require('./01')

const puzzleInput = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
const inputOpsCode = puzzleInput
  .trim()
  .split(',')
  .map(value => parseInt(value, 10))

const lastObservedOpsCode = inputOpsCode.slice()
lastObservedOpsCode[1] = 12
lastObservedOpsCode[2] = 2

const parsedOpsCode = parser(lastObservedOpsCode)

console.log(`Part 1: ${parsedOpsCode[0]}`)
