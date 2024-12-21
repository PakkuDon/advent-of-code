const calculateDistance = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y)

const getTravelCosts = (grid, start, end) => {
  const costs = {}
  const visited = {}

  const stack = []
  stack.push({ ...start, cost: 0 })
  while (stack.length > 0) {
    // Pick next lowest-cost node
    if (stack.length > 1) {
      stack.sort((a, b) => (a.cost < b.cost ? -1 : 1))
    }
    const current = stack.shift()

    // Skip visited nodes
    if (visited[`${current.x},${current.y}`]) {
      continue
    }
    visited[`${current.x},${current.y}`] = 1

    // Update cost for node if current cost is smaller
    if (
      !costs[`${current.x},${current.y}`] ||
      costs[`${current.x},${current.y}`] > current.cost
    ) {
      costs[`${current.x},${current.y}`] = current.cost
    }

    // Break when exit found
    if (current.x === end.x && current.y === end.y) {
      break
    }

    // Add potential neighbours to stack to explore
    // Up
    if (current.y > 0 && grid[current.y - 1][current.x] !== "#") {
      stack.push({
        x: current.x,
        y: current.y - 1,
        cost: current.cost + 1,
      })
    }
    // Right
    if (current.x < grid[0].length && grid[current.y][current.x + 1] !== "#") {
      stack.push({
        x: current.x + 1,
        y: current.y,
        cost: current.cost + 1,
      })
    }
    // Down
    if (current.y < grid.length && grid[current.y + 1][current.x] !== "#") {
      stack.push({
        x: current.x,
        y: current.y + 1,
        cost: current.cost + 1,
      })
    }
    // Left
    if (current.x > 0 && grid[current.y][current.x - 1] !== "#") {
      stack.push({
        x: current.x - 1,
        y: current.y,
        cost: current.cost + 1,
      })
    }
  }

  return costs
}

const countPotentialCheats = (
  track,
  costs,
  maxTeleportDistance,
  picosecondsSaved
) => {
  let count = 0
  track.forEach((point) => {
    const potentialTeleportPoints = track.filter(
      (coord) => calculateDistance(coord, point) <= maxTeleportDistance
    )

    potentialTeleportPoints.forEach((teleportPoint) => {
      const distance = calculateDistance(point, teleportPoint)
      const stepsSaved =
        costs[`${point.x},${point.y}`] -
        costs[`${teleportPoint.x},${teleportPoint.y}`] -
        distance

      if (stepsSaved >= picosecondsSaved) {
        count++
      }
    })
  })

  return count
}

const part1 = (input, picosecondsSaved) => {
  // Parse input
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))

  // Find start and end locations
  let start, end
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "S") {
        start = { x, y }
      } else if (grid[y][x] === "E") {
        end = { x, y }
      }
    }
  }

  // Find path to exit
  const costs = getTravelCosts(grid, start, end)

  // Turn visited tiles into array of points
  const track = Object.keys(costs).map((tile) => {
    const coords = tile.split(",")
    return {
      x: Number(coords[0]),
      y: Number(coords[1]),
    }
  })

  // Find potential tracks that could save picosecondsSaved or more
  return countPotentialCheats(track, costs, 2, picosecondsSaved)
}

const part2 = (input, picosecondsSaved) => {
  // Parse input
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))

  // Find start and end locations
  let start, end
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "S") {
        start = { x, y }
      } else if (grid[y][x] === "E") {
        end = { x, y }
      }
    }
  }

  // Find path to exit
  const costs = getTravelCosts(grid, start, end)

  // Turn visited tiles into array of points
  const track = Object.keys(costs).map((tile) => {
    const coords = tile.split(",")
    return {
      x: Number(coords[0]),
      y: Number(coords[1]),
    }
  })

  // Find potential tracks that could save picosecondsSaved or more
  return countPotentialCheats(track, costs, 20, picosecondsSaved)
}

module.exports = {
  part1,
  part2,
}
