const fs = require('fs')
const claimProcessor = require('./01-no-matter-how-you-slice-it.js')

const puzzleInput = fs.readFileSync('./input.txt', 'utf8').trim().split('\n')
const claims = puzzleInput.map(row => {
  let claimValues = row.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/)
  claimValues.shift()
  const [ id, x, y, width, height ] = claimValues.map(value => parseInt(value))

  return { id, x, y, width, height }
})

console.log(claimProcessor(claims))
