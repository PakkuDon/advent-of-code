const fs = require("fs")
const path = require("path")
const { part1 } = require("./solution")

const puzzleInput = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .trim()

console.log(`Part 1: ${part1(puzzleInput)}`)
console.log(`Part 2: N/A - Auto-completes after 49 stars`)
