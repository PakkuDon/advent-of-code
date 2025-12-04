const getRollsToRemove = (grid) => {
  const coordinates = []

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "@") {
        const neighbours = []
        // Add neighbours
        // Top-left
        if (y > 0 && x > 0) {
          neighbours.push(grid[y - 1][x - 1])
        }
        // Top
        if (y > 0) {
          neighbours.push(grid[y - 1][x])
        }
        // Top-right
        if (y > 0 && x < grid[y].length - 1) {
          neighbours.push(grid[y - 1][x + 1])
        }
        // Right
        if (x < grid[y].length - 1) {
          neighbours.push(grid[y][x + 1])
        }
        // Bottom-right
        if (y < grid.length - 1 && x < grid[y].length - 1) {
          neighbours.push(grid[y + 1][x + 1])
        }
        // Bottom
        if (y < grid.length - 1) {
          neighbours.push(grid[y + 1][x])
        }
        // Bottom-left
        if (y < grid.length - 1 && x > 0) {
          neighbours.push(grid[y + 1][x - 1])
        }
        // Left
        if (x > 0) {
          neighbours.push(grid[y][x - 1])
        }

        if (neighbours.filter((cell) => cell === "@").length < 4) {
          coordinates.push({ x, y })
        }
      }
    }
  }

  return coordinates
}

const part1 = (input) => {
  const grid = input.trim().split("\n")
  return getRollsToRemove(grid).length
}

const part2 = (input) => {
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))

  let totalRollsRemoved = 0
  let rollsToRemove = getRollsToRemove(grid)

  // Keep removing rolls until no more moves are possible
  while (rollsToRemove.length > 0) {
    // Remove rolls from grid
    rollsToRemove.forEach(({ x, y }) => {
      grid[y][x] = "."
    })

    totalRollsRemoved += rollsToRemove.length
    rollsToRemove = getRollsToRemove(grid)
  }

  return totalRollsRemoved
}

module.exports = {
  part1,
  part2,
}
