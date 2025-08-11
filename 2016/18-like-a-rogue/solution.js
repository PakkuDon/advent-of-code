const isTrap = (left, center, right) => {
  // Tile is a trap if any of the following conditions are true
  if (left === "^" && center === "^" && right !== "^") {
    return true
  }
  if (right === "^" && center === "^" && left !== "^") {
    return true
  }
  if (left === "^" && center === "." && right === ".") {
    return true
  }
  if (right === "^" && center === "." && left === ".") {
    return true
  }
  return false
}

const part1 = (input, targetRows) => {
  // Initialise state
  let row = input.trim()
  let safeTileCount = (row.match(/\./g) || []).length

  // Generate rows until targetRows reached
  for (let i = 1; i < targetRows; i++) {
    let nextRow = ""

    for (let x = 0; x < row.length; x++) {
      // Get tiles for trap check
      const left = row[x - 1] || "."
      const center = row[x]
      const right = row[x + 1] || "."

      if (isTrap(left, center, right)) {
        nextRow += "^"
      } else {
        nextRow += "."
        safeTileCount++
      }
    }
    row = nextRow
  }
  return safeTileCount
}

const part2 = (input, targetRows) => {
  return part1(input, targetRows)
}

module.exports = {
  part1,
  part2,
}
