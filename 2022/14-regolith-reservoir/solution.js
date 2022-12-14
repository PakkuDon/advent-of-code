const part1 = (input) => {
  const SAND_ORIGIN = { x: 500, y: 0 }
  const sandUnits = []

  const occupiedTiles = []
  const rows = input.trim().split("\n")
  rows.forEach((row) => {
    const coordinates = row.split(" -> ")

    for (let i = 0; i < coordinates.length - 1; i++) {
      const [x1, y1] = coordinates[i]
        .split(",")
        .map((value) => parseInt(value, 10))
      const [x2, y2] = coordinates[i + 1]
        .split(",")
        .map((value) => parseInt(value, 10))

      if (x1 !== x2) {
        let start = Math.min(x1, x2)
        let end = Math.max(x1, x2)
        for (let j = start; j <= end; j++) {
          occupiedTiles.push({ x: j, y: y1 })
        }
      } else {
        let start = Math.min(y1, y2)
        let end = Math.max(y1, y2)
        for (let j = start; j <= end; j++) {
          occupiedTiles.push({ x: x1, y: j })
        }
      }
    }
  })

  let cavernHeight = Math.max(
    ...occupiedTiles.map((coordinate) => coordinate.y)
  )
  let current = { ...SAND_ORIGIN }

  while (true) {
    // If next tile is clear move down
    if (
      !occupiedTiles.find(
        (tile) => tile.x === current.x && tile.y === current.y + 1
      )
    ) {
      current.y++
    }
    // Else if down-left tile is clear move down-left
    else if (
      !occupiedTiles.find(
        (tile) => tile.x === current.x - 1 && tile.y === current.y + 1
      )
    ) {
      current.y++
      current.x--
    }
    // Else if down-right tile is clear move down-right
    else if (
      !occupiedTiles.find(
        (tile) => tile.x === current.x + 1 && tile.y === current.y + 1
      )
    ) {
      current.y++
      current.x++
    }
    // Else break and start next unit
    else {
      occupiedTiles.push(current)
      sandUnits.push(current)
      current = { ...SAND_ORIGIN }
    }

    // If snow falls off edge break
    if (current.x < 0 || current.y > cavernHeight) {
      break
    }
  }

  return sandUnits.length
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}