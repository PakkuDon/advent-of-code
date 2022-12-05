const fs = require("fs")
const proseRecordPart1 = require("./01-repose-record")
const proseRecordPart2 = require("./02-repose-record")

const puzzleInput = fs.readFileSync("./input.txt", "utf8").trim().split("\n")
console.log("Part 1")
console.log(proseRecordPart1.checkSum(puzzleInput))
console.log("Part 2")
console.log(proseRecordPart2.checkSum(puzzleInput))
