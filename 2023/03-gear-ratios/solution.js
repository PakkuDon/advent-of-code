const part1 = (input) => {
  const rows = input.split("\n")
  let sum = 0

  rows.forEach((row, rowNumber) => {
    // Find bounding box for all numbers in row
    // Regex required as some numbers are subsets of others and
    // can appear multiple times
    const regex = new RegExp(`\\b\\d+\\b`, "g")
    let match
    while ((match = regex.exec(row))) {
      const number = match[0]
      const startIndex = match.index
      const endIndex = startIndex + number.length

      const boundingBox = []

      for (let y = rowNumber - 1; y <= rowNumber + 1; y++) {
        if (y < 0 || y >= rows.length) {
          continue
        }

        for (let x = startIndex - 1; x <= endIndex; x++) {
          if (x < 0 || x >= row.length) {
            continue
          }
          boundingBox.push(rows[y][x])
        }
      }

      if (
        boundingBox
          .filter((value) => isNaN(value))
          .some((value) => value !== ".")
      ) {
        sum += parseInt(number, 10)
      }
    }
  })

  return sum
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
