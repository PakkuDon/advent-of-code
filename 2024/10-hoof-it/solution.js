const part1 = (input) => {
  // Parse input
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split("").map((value) => Number(value)))
  const height = grid.length
  const width = grid[0].length

  // Find trailheads
  const trailheads = []
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x] === 0) {
        trailheads.push({ x, y })
      }
    }
  }

  // Calculate trailhead scores
  const scores = []
  trailheads.forEach((trailhead) => {
    const visited = new Set()
    const stack = []
    stack.push(trailhead)

    let current
    let score = 0

    // DFS to find which tiles with height 9 trailhead can reach
    while (stack.length > 0) {
      current = stack.pop()
      // Skip previously-visited tiles
      if (visited.has(`${current.x},${current.y}`)) {
        continue
      }
      if (grid[current.y][current.x] === 9) {
        score++
      }
      visited.add(`${current.x},${current.y}`)

      // Push available neighbours onto stack
      if (current.x - 1 >= 0) {
        if (grid[current.y][current.x - 1] === grid[current.y][current.x] + 1) {
          stack.push({ x: current.x - 1, y: current.y })
        }
      }
      if (current.x + 1 < width) {
        if (grid[current.y][current.x + 1] === grid[current.y][current.x] + 1) {
          stack.push({ x: current.x + 1, y: current.y })
        }
      }
      if (current.y - 1 >= 0) {
        if (grid[current.y - 1][current.x] === grid[current.y][current.x] + 1) {
          stack.push({ x: current.x, y: current.y - 1 })
        }
      }
      if (current.y + 1 < height) {
        if (grid[current.y + 1][current.x] === grid[current.y][current.x] + 1) {
          stack.push({ x: current.x, y: current.y + 1 })
        }
      }
    }

    scores.push(score)
  })

  // Sum trailhead scores
  return scores.reduce((total, current) => total + current, 0)
}

const part2 = (input) => {
  // Parse input
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split("").map((value) => Number(value)))
  const height = grid.length
  const width = grid[0].length

  // Find trailheads
  const trailheads = []
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x] === 0) {
        trailheads.push({ x, y })
      }
    }
  }

  // Calculate trailhead scores
  const scores = []
  trailheads.forEach((trailhead) => {
    const stack = []
    stack.push(trailhead)

    let current
    let score = 0

    // DFS to find which tiles with height 9 trailhead can reach
    while (stack.length > 0) {
      current = stack.pop()
      if (grid[current.y][current.x] === 9) {
        score++
      }

      // Push available neighbours onto stack
      if (current.x - 1 >= 0) {
        if (grid[current.y][current.x - 1] === grid[current.y][current.x] + 1) {
          stack.push({ x: current.x - 1, y: current.y })
        }
      }
      if (current.x + 1 < width) {
        if (grid[current.y][current.x + 1] === grid[current.y][current.x] + 1) {
          stack.push({ x: current.x + 1, y: current.y })
        }
      }
      if (current.y - 1 >= 0) {
        if (grid[current.y - 1][current.x] === grid[current.y][current.x] + 1) {
          stack.push({ x: current.x, y: current.y - 1 })
        }
      }
      if (current.y + 1 < height) {
        if (grid[current.y + 1][current.x] === grid[current.y][current.x] + 1) {
          stack.push({ x: current.x, y: current.y + 1 })
        }
      }
    }

    scores.push(score)
  })

  // Sum trailhead scores
  return scores.reduce((total, current) => total + current, 0)
}

module.exports = {
  part1,
  part2,
}
