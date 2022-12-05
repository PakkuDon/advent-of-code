const fs = require("fs")
const path = require("path")
const calculatePaperRequired = require("./01")
const calculateRibbonRequired = require("./02")

const puzzleInput = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8")
const allGiftDimensions = puzzleInput
  .trim()
  .split("\n")
  .map((row) => {
    const sides = row.split("x").map((side) => parseInt(side))

    return {
      width: sides[0],
      height: sides[1],
      length: sides[2],
    }
  })

const totalWrappingPaperRequired = allGiftDimensions
  .map((giftDimension) => calculatePaperRequired(giftDimension))
  .reduce((total, current) => total + current, 0)

const totalRibbonRequired = allGiftDimensions
  .map((giftDimension) => calculateRibbonRequired(giftDimension))
  .reduce((total, current) => total + current, 0)

console.log(`Part 1: ${totalWrappingPaperRequired}`)
console.log(`Part 2: ${totalRibbonRequired}`)
