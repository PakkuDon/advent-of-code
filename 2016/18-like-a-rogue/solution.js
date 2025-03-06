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
  const rows = [input.trim()]

  // Generate rows until targetRows reached
  while (rows.length < targetRows) {
    const previousRow = rows[rows.length - 1]
    let nextRow = ""

    for (let x = 0; x < previousRow.length; x++) {
      // Get tiles for trap check
      const left = previousRow[x - 1] || "."
      const center = previousRow[x]
      const right = previousRow[x + 1] || "."

      if (isTrap(left, center, right)) {
        nextRow += "^"
      } else {
        nextRow += "."
      }
    }
    rows.push(nextRow)
  }

  return rows.reduce((total, row) => total + (row.match(/\./g) || []).length, 0)
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
