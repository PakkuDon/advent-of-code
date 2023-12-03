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

const part2 = (input) => {
  const rows = input.split("\n")
  let sum = 0

  rows.forEach((row, rowNumber) => {
    // Find bounding box for all gears in row
    // Regex required as gear can appear multiple times
    const regex = new RegExp(`\\*`, "g")
    let match
    while ((match = regex.exec(row))) {
      let boundingBox = ""

      // Get surrounding symbols and numbers around grid
      for (let y = rowNumber - 1; y <= rowNumber + 1; y++) {
        if (y < 0 || y >= rows.length) {
          continue
        }
        let startX = match.index - 1
        let endX = match.index + 1

        while (startX >= 0 && !isNaN(rows[y][startX])) {
          startX--
        }
        while (endX <= row.length && !isNaN(rows[y][endX])) {
          endX++
        }

        boundingBox += rows[y].substring(startX, endX + 1) + "\n"
      }

      // If bounding box contains exactly two part numbers, increment sum by gear ratio
      if ((boundingBox.match(/\d+/g) || []).length === 2) {
        const [first, second] = boundingBox
          .match(/\d+/g)
          .map((value) => parseInt(value, 10))
        sum += first * second
      }
    }
  })

  return sum
}

module.exports = {
  part1,
  part2,
}
