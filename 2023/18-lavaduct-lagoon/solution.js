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

const part2 = (input) => {
  const hexToDirection = {
    0: "R",
    1: "D",
    2: "L",
    3: "U",
  }
  const instructions = input
    .trim()
    .split("\n")
    .map((row) => {
      const segments = row.split(" ")
      const hexSequence = segments[2].replace(/[#()]/g, "")

      return {
        direction: hexToDirection[hexSequence.substring(5)],
        meters: parseInt(hexSequence.substring(0, 5), 16),
      }
    })

  const digger = { x: 1, y: 1 }

  // Find vertices and perimeter of route
  const visited = []
  visited.push({ x: digger.x, y: digger.y })

  let perimeter = 0
  instructions.forEach((instruction) => {
    switch (instruction.direction) {
      case "R":
        digger.x += instruction.meters
        break
      case "U":
        digger.y -= instruction.meters
        break
      case "D":
        digger.y += instruction.meters
        break
      case "L":
        digger.x -= instruction.meters
        break
    }
    perimeter += instruction.meters
    visited.push({ x: digger.x, y: digger.y })
  })

  // Calculate area of polygon using shoelace formula
  // https://rosettacode.org/wiki/Shoelace_formula_for_polygonal_area
  let area = 0
  for (let i = 0; i < visited.length - 1; i++) {
    const tile = visited[i]
    const nextTile = visited[i + 1]
    area += tile.x * nextTile.y - nextTile.x * tile.y
  }
  area =
    Math.abs(
      area +
        perimeter +
        visited[visited.length - 1].x * visited[0].y -
        visited[0].x * visited[visited.length - 1].y
    ) /
      2 +
    1

  return area
}

module.exports = {
  part1,
  part2,
}
