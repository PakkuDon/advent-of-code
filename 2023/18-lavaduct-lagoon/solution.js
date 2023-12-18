const part1 = (input) => {
  const instructions = input
    .trim()
    .split("\n")
    .map((row) => {
      const segments = row.split(" ")
      return {
        direction: segments[0],
        meters: parseInt(segments[1], 10),
        colour: segments[2],
      }
    })
  const digger = { x: 1, y: 1 }

  // Use non-array to track visitedTiles
  const visitedTiles = []
  visitedTiles.push({ x: digger.x, y: digger.y })

  // Follow instructions to dig tunnel
  instructions.forEach((instruction) => {
    for (let i = 0; i < instruction.meters; i++) {
      switch (instruction.direction) {
        case "R":
          digger.x++
          break
        case "U":
          digger.y--
          break
        case "D":
          digger.y++
          break
        case "L":
          digger.x--
          break
      }
      visitedTiles.push({ x: digger.x, y: digger.y })
    }
  })

  // Offset numbers so that all numbers are positive
  const minY = Math.min(...visitedTiles.map((tile) => tile.y))
  const minX = Math.min(...visitedTiles.map((tile) => tile.x))

  visitedTiles.forEach((tile) => {
    tile.x += Math.abs(minX)
    tile.y += Math.abs(minY)
  })

  // Construct grid
  // Pad out grid for flood fill
  const maxY = Math.max(...visitedTiles.map((tile) => tile.y))
  const maxX = Math.max(...visitedTiles.map((tile) => tile.x))
  const grid = []
  for (let y = 0; y <= maxY; y++) {
    const row = []
    for (let x = 0; x <= maxX; x++) {
      row.push(".")
    }
    grid.push(row)
  }

  // Fill in visitedTiles on grid
  visitedTiles.forEach((tile) => {
    grid[tile.y][tile.x] = "#"
  })

  // Flood fill grid to determine which tiles are part of lagoon
  const queue = []
  const startingPosition = {
    x: visitedTiles[0].x + 1,
    y: visitedTiles[0].y + 1,
  }
  queue.push(startingPosition)
  const seen = new Set()
  while (queue.length > 0) {
    const { x, y } = queue.shift()

    if (seen.has(`${x},${y}`)) {
      continue
    }
    seen.add(`${x},${y}`)
    grid[y][x] = "#"

    if (x + 1 < grid[0].length && grid[y][x + 1] !== "#") {
      queue.push({ x: x + 1, y })
    }
    if (x > 0 && grid[y][x - 1] !== "#") {
      queue.push({ x: x - 1, y })
    }
    if (y + 1 < grid.length && grid[y + 1][x] !== "#") {
      queue.push({ x, y: y + 1 })
    }
    if (y > 0 && grid[y - 1][x] !== "#") {
      queue.push({ x, y: y - 1 })
    }
  }

  let filledTiles = 0
  // Count filled tiles
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "#") {
        filledTiles++
      }
    }
  }

  return filledTiles
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
