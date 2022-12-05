const fs = require("fs")
const path = require("path")
const calculateSignal = require("./01")

const puzzleInput = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8")
const instructions = puzzleInput.trim().split("\n")

const signal = calculateSignal(instructions, "a")
const signalWithDifferentDefault = calculateSignal(instructions, "a", {
  b: signal,
})

console.log(`Part 1: ${signal}`)
console.log(`Part 2: ${signalWithDifferentDefault}`)
