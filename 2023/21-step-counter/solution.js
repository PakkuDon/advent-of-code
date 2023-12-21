const part1 = (input, maxSteps) => {
  // Parse input
  const elf = {}
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))
  // Find elf's starting position
  for (let y = 0; y < grid.length; y++) {
    if (elf.y) {
      break
    }
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === "S") {
        elf.x = x
        elf.y = y
        break
      }
    }
  }

  const stack = []
  const visited = new Set()
  const potentialPlots = new Set()

  // Find possible tiles that elf can reach in maxSteps
  stack.push({ ...elf, steps: 0 })
  while (stack.length > 0) {
    const { x, y, steps } = stack.pop()
    if (visited.has(`${x},${y},${steps}`)) {
      continue
    }
    visited.add(`${x},${y},${steps}`)

    // If steps from starting point is at max provided steps include tile in possible tile count
    if (steps === maxSteps) {
      potentialPlots.add(`${x},${y}`)
    }
    // Otherwise add potential neighbours to explore
    else {
      if (x > 0 && grid[y][x - 1] !== "#") {
        stack.push({ x: x - 1, y, steps: steps + 1 })
      }
      if (x < grid[0].length - 1 && grid[y][x + 1] !== "#") {
        stack.push({ x: x + 1, y, steps: steps + 1 })
      }
      if (y > 0 && grid[y - 1][x] !== "#") {
        stack.push({ x, y: y - 1, steps: steps + 1 })
      }
      if (y < grid.length - 1 && grid[y + 1][x] !== "#") {
        stack.push({ x, y: y + 1, steps: steps + 1 })
      }
    }
  }

  return potentialPlots.size
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
