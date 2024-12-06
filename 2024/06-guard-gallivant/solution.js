const part1 = (input) => {
  const grid = input.trim().split("\n")
  let guard
  // Find guard position
  for (let y = 0; y < grid.length; y++) {
    if (guard) {
      break
    }

    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "^") {
        guard = { x, y, direction: "N" }
        break
      }
    }
  }

  // Plot guard route
  let distinctSteps = new Set()

  while (
    guard.x >= 0 &&
    guard.x < grid[0].length &&
    guard.y >= 0 &&
    guard.y < grid.length
  ) {
    distinctSteps.add(`${guard.x},${guard.y}`)

    if (guard.direction === "N") {
      // Default to empty array to handle case where guard steps out of bounds
      if ((grid[guard.y - 1] || [])[guard.x] !== "#") {
        guard.y = guard.y - 1
      } else {
        guard.direction = "E"
      }
    } else if (guard.direction === "E") {
      if (grid[guard.y][guard.x + 1] !== "#") {
        guard.x = guard.x + 1
      } else {
        guard.direction = "S"
      }
    } else if (guard.direction === "S") {
      if ((grid[guard.y + 1] || [])[guard.x] !== "#") {
        guard.y = guard.y + 1
      } else {
        guard.direction = "W"
      }
    } else if (guard.direction === "W") {
      if (grid[guard.y][guard.x - 1] !== "#") {
        guard.x = guard.x - 1
      } else {
        guard.direction = "N"
      }
    }
  }

  return distinctSteps.size
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
