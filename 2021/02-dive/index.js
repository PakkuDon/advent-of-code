const fs = require("fs")
const path = require("path")
const productOfFinalDepthAndDistance = require("./01")
const productOfFinalDepthAndDistanceWithAim = require("./02")

const puzzleInput = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n")

console.log(`Part 1: ${productOfFinalDepthAndDistance(puzzleInput)}`)
console.log(`Part 2: ${productOfFinalDepthAndDistanceWithAim(puzzleInput)}`)
