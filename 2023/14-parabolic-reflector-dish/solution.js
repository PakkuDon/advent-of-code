const getRockLocations = (grid) => {
  const rocks = []
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "O") {
        rocks.push({ x, y })
      }
    }
  }
  return rocks
}

const part1 = (input) => {
  // Parse input
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))
  const roundRocks = getRockLocations(grid)

  // Tilt rocks
  roundRocks.forEach((rock) => {
    while (rock.y > 0 && grid[rock.y - 1][rock.x] === ".") {
      grid[rock.y - 1][rock.x] = "O"
      grid[rock.y][rock.x] = "."
      rock.y -= 1
    }
  })

  // Calculate load on north support beams
  return roundRocks.reduce((total, rock) => total + grid.length - rock.y, 0)
}

const part2 = (input) => {
  // Parse input
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))
  const roundRocks = getRockLocations(grid)

  // Tilt rocks
  const numberOfCycles = 1000000000
  const moves = [
    {
      direction: "N",
      shift: ({ x, y }) => ({ x, y: y - 1 }),
    },
    {
      direction: "W",
      shift: ({ x, y }) => ({ x: x - 1, y }),
    },
    {
      direction: "S",
      shift: ({ x, y }) => ({ x, y: y + 1 }),
    },
    {
      direction: "E",
      shift: ({ x, y }) => ({ x: x + 1, y }),
    },
  ]

  let previousStates = {}
  for (let i = 0; i < numberOfCycles; i++) {
    moves.forEach((move) => {
      // Sort rocks so that those closest to edge that we are moving to move first
      if (move.direction === "N") {
        roundRocks.sort((a, b) => {
          return a.y - b.y
        })
      } else if (move.direction === "S") {
        roundRocks.sort((a, b) => {
          return b.y - a.y
        })
      } else if (move.direction === "W") {
        roundRocks.sort((a, b) => {
          return a.x - b.x
        })
      } else {
        roundRocks.sort((a, b) => {
          return b.x - a.x
        })
      }

      roundRocks.forEach((rock) => {
        while (true) {
          const nextPosition = move.shift(rock)
          if (
            nextPosition.x < 0 ||
            nextPosition.x >= grid[0].length ||
            nextPosition.y < 0 ||
            nextPosition.y >= grid.length
          ) {
            break
          }
          if (grid[nextPosition.y][nextPosition.x] === ".") {
            grid[nextPosition.y][nextPosition.x] = "O"
            grid[rock.y][rock.x] = "."
            rock.x = nextPosition.x
            rock.y = nextPosition.y
          } else {
            break
          }
        }
      })
    })

    // If cycle has been detected advance iteration to start of last cycle
    const currentGridState = grid.map((row) => row.join("")).join("\n")
    if (previousStates[currentGridState]) {
      const cycleLength = i - previousStates[currentGridState]
      i += Math.floor((numberOfCycles - i) / cycleLength) * cycleLength
    }
    // Associate current point in cycle with current grid state for cycle detection
    previousStates[currentGridState] = i
  }

  // Calculate load on north support beams
  return roundRocks.reduce((total, rock) => total + grid.length - rock.y, 0)
}

module.exports = {
  part1,
  part2,
}
