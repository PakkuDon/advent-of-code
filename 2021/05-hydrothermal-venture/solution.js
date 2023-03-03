const part1 = (input) => {
  const rows = input.split("\n")
  const visitedPoints = new Set()
  const duplicatePoints = new Set()

  rows.forEach((row) => {
    const [[x1, y1], [x2, y2]] = row
      .split(" -> ")
      .map((coords) => coords.split(",").map((value) => Number(value)))
    if (y1 === y2) {
      for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
        if (visitedPoints.has(`${x},${y1}`)) {
          duplicatePoints.add(`${x},${y1}`)
        } else {
          visitedPoints.add(`${x},${y1}`)
        }
      }
    } else if (x1 === x2) {
      for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
        if (visitedPoints.has(`${x1},${y}`)) {
          duplicatePoints.add(`${x1},${y}`)
        } else {
          visitedPoints.add(`${x1},${y}`)
        }
      }
    }
  })

  return duplicatePoints.size
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
