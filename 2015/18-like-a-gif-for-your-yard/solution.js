const getNextState = (grid) => {
  // Create intermediary array so state is
  // not updated mid-step for subsequent cells
  const newState = structuredClone(grid)

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      // Get neighbouring cells
      // Bound-check only required for first dimension of grid
      // as neighbours out of bounds are undefined and assumed off
      const neighbours = []
      if (y > 0) {
        // Up
        neighbours.push(grid[y - 1][x])
        // Up-Left
        neighbours.push(grid[y - 1][x - 1])
        // Up-Right
        neighbours.push(grid[y - 1][x + 1])
      }
      if (y < grid.length - 1) {
        // Down
        neighbours.push(grid[y + 1][x])
        // Down-Left
        neighbours.push(grid[y + 1][x - 1])
        // Down-Right
        neighbours.push(grid[y + 1][x + 1])
      }
      // Right
      neighbours.push(grid[y][x + 1])
      // Left
      neighbours.push(grid[y][x - 1])

      const noOfLitNeighbours = neighbours.filter((cell) => cell === "#").length

      // If light is on, light stays on if 2-3 neighbours are also on
      if (grid[y][x] === "#") {
        if (noOfLitNeighbours === 2 || noOfLitNeighbours === 3) {
          newState[y][x] = "#"
        } else {
          newState[y][x] = "."
        }
      }
      // If light is off, light switches on if exactly 3 neighbours are on
      else {
        if (noOfLitNeighbours === 3) {
          newState[y][x] = "#"
        } else {
          newState[y][x] = "."
        }
      }
    }
  }

  return newState
}

const part1 = (input, steps) => {
  // Parse input
  let grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))

  // Calculate next state for given number of steps
  for (let i = 0; i < steps; i++) {
    grid = getNextState(grid)
  }

  // Count how many lights are on
  return grid.reduce(
    (total, row) => total + row.filter((cell) => cell === "#").length,
    0
  )
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
