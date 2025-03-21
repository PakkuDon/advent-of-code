const part1 = (input) => {
  const grid = input.trim().split("\n")
  let count = 0

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "X") {
        // Check horizontal match
        if (
          grid[y][x + 1] === "M" &&
          grid[y][x + 2] === "A" &&
          grid[y][x + 3] === "S"
        ) {
          count++
        }

        // Check backwards match
        if (
          grid[y][x - 1] === "M" &&
          grid[y][x - 2] === "A" &&
          grid[y][x - 3] === "S"
        ) {
          count++
        }

        if (y < grid.length - 3) {
          // Check downward match
          if (
            grid[y + 1][x] === "M" &&
            grid[y + 2][x] === "A" &&
            grid[y + 3][x] === "S"
          ) {
            count++
          }
          // Check diagonal down-right match
          if (x < grid[y].length - 3) {
            if (
              grid[y + 1][x + 1] === "M" &&
              grid[y + 2][x + 2] === "A" &&
              grid[y + 3][x + 3] === "S"
            ) {
              count++
            }
          }
          // Check diagonal down-left match
          if (x >= 3) {
            if (
              grid[y + 1][x - 1] === "M" &&
              grid[y + 2][x - 2] === "A" &&
              grid[y + 3][x - 3] === "S"
            ) {
              count++
            }
          }
        }

        if (y >= 3) {
          // Check upward match
          if (
            grid[y - 1][x] === "M" &&
            grid[y - 2][x] === "A" &&
            grid[y - 3][x] === "S"
          ) {
            count++
          }
          // Check diagonal up-right match
          if (x < grid[y].length - 3) {
            if (
              grid[y - 1][x + 1] === "M" &&
              grid[y - 2][x + 2] === "A" &&
              grid[y - 3][x + 3] === "S"
            ) {
              count++
            }
          }
          // Check diagonal up-left match
          if (x >= 3) {
            if (
              grid[y - 1][x - 1] === "M" &&
              grid[y - 2][x - 2] === "A" &&
              grid[y - 3][x - 3] === "S"
            ) {
              count++
            }
          }
        }
      }
    }
  }

  return count
}

const part2 = (input) => {
  const grid = input.trim().split("\n")
  let count = 0

  for (let y = 1; y < grid.length - 1; y++) {
    for (let x = 1; x < grid[y].length - 1; x++) {
      if (grid[y][x] === "A") {
        // Check if cross matches
        const lines = [
          // Diagonal down-right
          [grid[y - 1][x - 1], grid[y][x], grid[y + 1][x + 1]].join(""),
          // Diagonal up-right
          [grid[y + 1][x - 1], grid[y][x], grid[y - 1][x + 1]].join(""),
        ]

        if (
          lines.every(
            (line) =>
              line === "MAS" || line.split("").reverse().join("") === "MAS"
          )
        ) {
          count++
        }
      }
    }
  }

  return count
}

module.exports = {
  part1,
  part2,
}
