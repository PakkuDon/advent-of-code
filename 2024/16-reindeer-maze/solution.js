const part1 = (input) => {
  // Parse maze
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))

  // Find start and end locations
  let start, end
  const graph = {}

  // Initialise travel costs for all nodes in maze
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "S") {
        start = { x, y }
        graph[`${x},${y}`] = 0
      } else if (grid[y][x] === "E") {
        end = { x, y }
        graph[`${x},${y}`] = Number.MAX_SAFE_INTEGER
      } else {
        graph[`${x},${y}`] = Number.MAX_SAFE_INTEGER
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
      graph[`${a.x},${a.y}`] < graph[`${b.x},${b.y}`] ? -1 : 1
    )
    const current = stack.shift()
    if (visited[`${current.x},${current.y}`]) {
      continue
    }
    visited[`${current.x},${current.y}`] = 1
    const currentCost = graph[`${current.x},${current.y}`]

    // Add potential neighbours to stack to explore
    // Up
    if (grid[current.y - 1][current.x] !== "#") {
      stack.push({
        x: current.x,
        y: current.y - 1,
        direction: "N",
      })
      const cost = currentCost + (current.direction === "N" ? 1 : 1001)
      if (cost < graph[`${current.x},${current.y - 1}`]) {
        graph[`${current.x},${current.y - 1}`] = cost
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
      if (cost < graph[`${current.x + 1},${current.y}`]) {
        graph[`${current.x + 1},${current.y}`] = cost
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
      if (cost < graph[`${current.x},${current.y + 1}`]) {
        graph[`${current.x},${current.y + 1}`] = cost
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
      if (cost < graph[`${current.x - 1},${current.y}`]) {
        graph[`${current.x - 1},${current.y}`] = cost
      }
    }
  }

  // Return score for end
  return graph[`${end.x},${end.y}`]
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
