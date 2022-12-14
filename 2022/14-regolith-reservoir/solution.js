const getOccupiedTiles = (input) => {
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

  return occupiedTiles
}

const countSandUnitsDropped = (occupiedTiles, cavernHeight) => {
  const SAND_ORIGIN = { x: 500, y: 0 }
  let count = 0
  const filled = {}
  occupiedTiles.forEach((tile) => {
    filled[`${tile.x},${tile.y}`] = true
  })

  let current = { ...SAND_ORIGIN }

  while (true) {
    // If sand out of bounds exit
    if (current.y > cavernHeight) {
      break
    }

    // If next tile is clear move down
    if (!filled[`${current.x},${current.y + 1}`]) {
      current.y++
    }
    // Else if down-left tile is clear move down-left
    else if (!filled[`${current.x - 1},${current.y + 1}`]) {
      current.y++
      current.x--
    }
    // Else if down-right tile is clear move down-right
    else if (!filled[`${current.x + 1},${current.y + 1}`]) {
      current.y++
      current.x++
    }
    // Else sand unit is stationary
    else {
      filled[`${current.x},${current.y}`] = true
      count++
      // If sand origin blocked exit
      if (current.x === SAND_ORIGIN.x && current.y === SAND_ORIGIN.y) {
        break
      }
      current = { ...SAND_ORIGIN }
    }
  }

  return count
}

const part1 = (input) => {
  const occupiedTiles = getOccupiedTiles(input)
  let cavernHeight = Math.max(
    ...occupiedTiles.map((coordinate) => coordinate.y)
  )

  return countSandUnitsDropped(occupiedTiles, cavernHeight)
}

const part2 = (input) => {
  const occupiedTiles = getOccupiedTiles(input)
  let cavernHeight = Math.max(
    ...occupiedTiles.map((coordinate) => coordinate.y)
  )

  // Add floor
  // Doesn't quite span infinity but covers enough ground given puzzle input
  for (let x = 0; x < 1000; x++) {
    occupiedTiles.push({ x, y: cavernHeight + 2 })
  }

  return countSandUnitsDropped(occupiedTiles, cavernHeight + 2)
}

module.exports = {
  part1,
  part2,
}
