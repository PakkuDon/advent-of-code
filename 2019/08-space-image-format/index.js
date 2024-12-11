const fs = require("fs")
const path = require("path")
const { part1, part2 } = require("./solution")

const puzzleInput = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .trim()

console.log(`Part 1: ${part1(puzzleInput, 25, 6)}`)
console.log(`Part 2: \n${part2(puzzleInput, 25, 6)}`)