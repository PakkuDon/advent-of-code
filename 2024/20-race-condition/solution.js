const calculateDistance = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y)

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
  const costs = {}
  const visited = {}
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      costs[`${x},${y}`] = Number.MAX_SAFE_INTEGER
    }
  }

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

    if (costs[`${current.x},${current.y}`] > current.cost) {
      costs[`${current.x},${current.y}`] = current.cost
    }

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

  // Turn visited tiles into array of points
  const visitedPoints = Object.keys(visited).map((tile) => {
    const coords = tile.split(",")
    return {
      x: Number(coords[0]),
      y: Number(coords[1]),
    }
  })

  // Find potential tracks that could save picosecondsSaved or more
  let count = 0
  visitedPoints.forEach((point) => {
    const potentialTeleportPoints = visitedPoints.filter(
      (coord) => calculateDistance(coord, point) <= 2
    )
    potentialTeleportPoints.forEach((teleportPoint) => {
      const stepsSaved =
        costs[`${point.x},${point.y}`] -
        costs[`${teleportPoint.x},${teleportPoint.y}`] -
        2
      if (stepsSaved >= picosecondsSaved) {
        count++
      }
    })
  })

  return count
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
  const costs = {}
  const visited = {}
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      costs[`${x},${y}`] = Number.MAX_SAFE_INTEGER
    }
  }

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

    if (costs[`${current.x},${current.y}`] > current.cost) {
      costs[`${current.x},${current.y}`] = current.cost
    }

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

  // Turn visited tiles into array of points
  const visitedPoints = Object.keys(visited).map((tile) => {
    const coords = tile.split(",")
    return {
      x: Number(coords[0]),
      y: Number(coords[1]),
    }
  })

  // Find potential tracks that could save picosecondsSaved or more
  let count = 0
  visitedPoints.forEach((point) => {
    const potentialTeleportPoints = visitedPoints.filter(
      (coord) => calculateDistance(coord, point) <= 20
    )

    potentialTeleportPoints.forEach((teleportPoint) => {
      const distanceToPoint = calculateDistance(point, teleportPoint)
      const stepsSaved =
        costs[`${point.x},${point.y}`] -
        costs[`${teleportPoint.x},${teleportPoint.y}`] -
        distanceToPoint
      if (stepsSaved >= picosecondsSaved) {
        count++
      }
    })
  })

  return count
}

module.exports = {
  part1,
  part2,
}
