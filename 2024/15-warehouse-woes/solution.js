// Helper function to debug grid
const printGrid = (grid, robot) => {
  let str = ""
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (robot.x === x && robot.y === y) {
        str += "@"
      } else {
        str += grid[y][x]
      }
    }

    str += "\n"
  }

  console.log(str)
}

const part1 = (input) => {
  // Parse input
  const [gridInput, movesInput] = input.trim().split("\n\n")
  const grid = gridInput.split("\n").map((row) => row.split(""))
  const moves = movesInput.replace(/\s/g, "").split("")
  const robot = {}

  // Find robot location
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "@") {
        robot.x = x
        robot.y = y
        // Blank robot tile
        grid[y][x] = "."
        break
      }
    }

    if (typeof robot.x !== "undefined") {
      break
    }
  }

  // Process instructions
  moves.forEach((move) => {
    if (move === "<") {
      // Scan to left to count how many spaces we need to move
      let boxesToMove = 0
      for (let i = robot.x - 1; i > 0; i--) {
        if (grid[robot.y][i] === "#" || grid[robot.y][i] === ".") {
          break
        }
        boxesToMove++
      }

      // If end of boxes not a wall, push blocks and move robot
      if (grid[robot.y][robot.x - boxesToMove - 1] !== "#") {
        for (let i = boxesToMove; i > 0; i--) {
          grid[robot.y][robot.x - i - 1] = "O"
          grid[robot.y][robot.x - i] = "."
        }

        robot.x = robot.x - 1
      }
    } else if (move === "^") {
      // Scan to top to count how many spaces we need to move
      let boxesToMove = 0
      for (let i = robot.y - 1; i > 0; i--) {
        if (grid[i][robot.x] === "#" || grid[i][robot.x] === ".") {
          break
        }
        boxesToMove++
      }

      // If end of boxes not a wall, push blocks and move robot
      if (grid[robot.y - boxesToMove - 1][robot.x] !== "#") {
        for (let i = boxesToMove; i > 0; i--) {
          grid[robot.y - i - 1][robot.x] = "O"
          grid[robot.y - i][robot.x] = "."
        }

        robot.y = robot.y - 1
      }
    } else if (move === ">") {
      // Scan to right to count how many spaces we need to move
      let boxesToMove = 0
      for (let i = robot.x + 1; i < grid[0].length; i++) {
        if (grid[robot.y][i] === "#" || grid[robot.y][i] === ".") {
          break
        }
        boxesToMove++
      }

      // If end of boxes not a wall, push blocks and move robot
      if (grid[robot.y][robot.x + boxesToMove + 1] !== "#") {
        for (let i = boxesToMove; i > 0; i--) {
          grid[robot.y][robot.x + i + 1] = "O"
          grid[robot.y][robot.x + i] = "."
        }

        robot.x = robot.x + 1
      }
    } else if (move === "v") {
      // Scan to bottom to count how many spaces we need to move
      let boxesToMove = 0
      for (let i = robot.y + 1; i < grid.length; i++) {
        if (grid[i][robot.x] === "#" || grid[i][robot.x] === ".") {
          break
        }
        boxesToMove++
      }

      // If end of boxes not a wall, push blocks and move robot
      if (grid[robot.y + boxesToMove + 1][robot.x] !== "#") {
        for (let i = boxesToMove; i > 0; i--) {
          grid[robot.y + i + 1][robot.x] = "O"
          grid[robot.y + i][robot.x] = "."
        }

        robot.y = robot.y + 1
      }
    }
  })

  // Calculate sum of coordinates for all box locations
  let sum = 0
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "O") {
        sum += 100 * y + x
      }
    }
  }

  return sum
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
