const fs = require("fs")
const path = require("path")
const countDepthIncreases = require("./01")
const countDepthIncreasesWithWindow = require("./02")

const puzzleInput = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8")
const readings = puzzleInput
  .trim()
  .split("\n")
  .map((value) => parseInt(value, 10))

console.log(`Part 1: ${countDepthIncreases(readings)}`)
console.log(`Part 2: ${countDepthIncreasesWithWindow(readings)}`)
