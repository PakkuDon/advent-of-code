const part1 = (input, width, bytesFallen) => {
  // Parse input
  const start = { x: 0, y: 0 }
  const end = { x: width, y: width }
  const grid = []
  for (let y = 0; y < width + 1; y++) {
    grid.push(Array(width + 1).fill("."))
  }
  const bytes = input
    .trim()
    .split("\n")
    .map((row) => {
      const coords = row.split(",")
      return {
        x: Number(coords[0]),
        y: Number(coords[1]),
      }
    })

  // Construct maze
  for (let i = 0; i < bytesFallen; i++) {
    const byte = bytes[i]
    grid[byte.y][byte.x] = "#"
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
    if (current.x < width && grid[current.y][current.x + 1] !== "#") {
      stack.push({
        x: current.x + 1,
        y: current.y,
        cost: current.cost + 1,
      })
    }
    // Down
    if (current.y < width && grid[current.y + 1][current.x] !== "#") {
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

  return costs[`${end.x},${end.y}`]
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
