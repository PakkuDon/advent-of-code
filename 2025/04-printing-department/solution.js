const part1 = (input) => {
  const grid = input.trim().split("\n")
  let count = 0

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
          count++
        }
      }
    }
  }

  return count
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
