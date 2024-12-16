const getLowestScore = (grid, start, end) => {
  const costs = {}

  // Initialise travel costs for all nodes in maze
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "S") {
        costs[`${x},${y}`] = 0
      } else {
        costs[`${x},${y}`] = Number.MAX_SAFE_INTEGER
      }
    }
  }

  // Dijkstra's algorithm - Find lowest cost to reach end
  const stack = []
  const visited = {}
  stack.push({ ...start, direction: "E" })

  while (stack.length > 0) {
    // Pick next lowest-cost node
    stack.sort((a, b) =>
      costs[`${a.x},${a.y}`] < costs[`${b.x},${b.y}`] ? -1 : 1
    )
    const current = stack.shift()
    if (visited[`${current.x},${current.y}`]) {
      continue
    }
    visited[`${current.x},${current.y}`] = 1
    const currentCost = costs[`${current.x},${current.y}`]

    // Add potential neighbours to stack to explore
    // Up
    if (grid[current.y - 1][current.x] !== "#") {
      stack.push({
        x: current.x,
        y: current.y - 1,
        direction: "N",
      })
      const cost = currentCost + (current.direction === "N" ? 1 : 1001)
      if (cost < costs[`${current.x},${current.y - 1}`]) {
        costs[`${current.x},${current.y - 1}`] = cost
      }
    }
    // Right
    if (grid[current.y][current.x + 1] !== "#") {
      stack.push({
        x: current.x + 1,
        y: current.y,
        direction: "E",
      })
      const cost = currentCost + (current.direction === "E" ? 1 : 1001)
      if (cost < costs[`${current.x + 1},${current.y}`]) {
        costs[`${current.x + 1},${current.y}`] = cost
      }
    }
    // Down
    if (grid[current.y + 1][current.x] !== "#") {
      stack.push({
        x: current.x,
        y: current.y + 1,
        direction: "S",
      })
      const cost = currentCost + (current.direction === "S" ? 1 : 1001)
      if (cost < costs[`${current.x},${current.y + 1}`]) {
        costs[`${current.x},${current.y + 1}`] = cost
      }
    }
    // Left
    if (grid[current.y][current.x - 1] !== "#") {
      stack.push({
        x: current.x - 1,
        y: current.y,
        direction: "W",
      })
      const cost = currentCost + (current.direction === "W" ? 1 : 1001)
      if (cost < costs[`${current.x - 1},${current.y}`]) {
        costs[`${current.x - 1},${current.y}`] = cost
      }
    }
  }

  // Return score for end
  return costs[`${end.x},${end.y}`]
}

const part1 = (input) => {
  // Parse maze
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

  return getLowestScore(grid, start, end)
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
