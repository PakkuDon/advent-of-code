const fs = require("fs")
const path = require("path")
const { part1, part2 } = require("./solution")

const puzzleInput = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .trim()

console.log(`Part 1: ${part1(puzzleInput, { a: 7 })}`)
console.log("Note: Part 2 currently takes over 5 minutes to complete")
console.log(`Part 2: ${part2(puzzleInput, { a: 12 })}`)
