const fs = require("fs")
const path = require("path")
const getNumberOfHousesVisited = require("./01")
const getNumberOfHousesVisitedWithRobotSanta = require("./02")

const puzzleInput = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8")
const directions = puzzleInput.trim().split("")

const numberOfHousesVisited = getNumberOfHousesVisited(directions)
const numberOfHousesVisitedWithRobotSanta =
  getNumberOfHousesVisitedWithRobotSanta(directions)

console.log(`Part 1: ${numberOfHousesVisited}`)
console.log(`Part 2: ${numberOfHousesVisitedWithRobotSanta}`)
