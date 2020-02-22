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

let parsedOpsCode = parser(lastObservedOpsCode)

console.log(`Part 1: ${parsedOpsCode[0]}`)

let solutionFound = false
let i, j
for (i = 0; i < 100; i++) {
  for (j = 0; j < 100; j++) {
    lastObservedOpsCode[1] = i
    lastObservedOpsCode[2] = j
    parsedOpsCode = parser(lastObservedOpsCode)

    if (parsedOpsCode[0] === 19690720) {
      solutionFound = true
      break
    }
  }

  if (solutionFound) {
    break
  }
}

console.log(`Part 2: Values that generate output 19690720: ${i},${j}`)
