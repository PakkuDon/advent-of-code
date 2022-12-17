const fs = require("fs")
const path = require("path")
const { part1, part2 } = require("./solution")

const puzzleInput = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8")
const values = puzzleInput.trim()

console.log(`Part 1: ${part1(values)}`)
console.log(`Part 2: ${part2(values)}`)
