const fs = require("fs")
const path = require("path")
const isNiceString = require("./01")
const isNiceStringV2 = require("./02")

const puzzleInput = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8")
const strings = puzzleInput.trim().split("\n")

let numberOfNiceStrings = 0
let numberOfNiceStringsV2 = 0

for (let string of strings) {
  if (isNiceString(string)) {
    numberOfNiceStrings++
  }
  if (isNiceStringV2(string)) {
    numberOfNiceStringsV2++
  }
}

console.log(`Part 1: ${numberOfNiceStrings}`)
console.log(`Part 2: ${numberOfNiceStringsV2}`)
