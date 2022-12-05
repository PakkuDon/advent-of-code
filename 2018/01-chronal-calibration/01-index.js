const fs = require("fs")
const chronalCalibration = require("./01-chronal-calibration")

const puzzleInput = fs.readFileSync("./input.txt", "utf8").trim()
const frequencies = puzzleInput.split(/\s/).map((value) => parseInt(value))

console.log(chronalCalibration(frequencies))
