const part1 = (input) => {
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))

  // Follow beam path(s)
  const visitedTiles = new Set()
  const beams = []
  beams.push({ x: 0, y: 0, direction: "right", state: "active" })
  const moves = {
    right: {
      shift: ({ x, y }) => ({ x: x + 1, y }),
    },
    up: {
      shift: ({ x, y }) => ({ x, y: y - 1 }),
    },
    left: {
      shift: ({ x, y }) => ({ x: x - 1, y }),
    },
    down: {
      shift: ({ x, y }) => ({ x, y: y + 1 }),
    },
  }

  let previousSetSize = 0
  let cyclesSinceLastChange = 0
  while (beams.some((beam) => beam.state === "active")) {
    // Exit once cycle detected
    if (previousSetSize === visitedTiles.size) {
      cyclesSinceLastChange++
    }
    previousSetSize = visitedTiles.size

    if (cyclesSinceLastChange > 5) {
      break
    }
    beams
      .filter((beam) => beam.state === "active")
      .forEach((beam) => {
        // Process instruction only if next position is in bounds
        if (
          beam.y >= 0 &&
          beam.y < grid.length &&
          beam.x >= 0 &&
          beam.x < grid[0].length
        ) {
          visitedTiles.add(`${beam.x},${beam.y}`)
          const currentTile = grid[beam.y][beam.x]
          let nextPosition
          switch (currentTile) {
            case ".":
              nextPosition = moves[beam.direction].shift(beam)
              beam.x = nextPosition.x
              beam.y = nextPosition.y
              break
            case "/":
              if (beam.direction === "right") {
                beam.direction = "up"
                beam.y--
              } else if (beam.direction === "left") {
                beam.direction = "down"
                beam.y++
              } else if (beam.direction === "up") {
                beam.direction = "right"
                beam.x++
              } else if (beam.direction === "down") {
                beam.direction = "left"
                beam.x--
              }
              break
            case "\\":
              if (beam.direction === "left") {
                beam.direction = "up"
                beam.y--
              } else if (beam.direction === "right") {
                beam.direction = "down"
                beam.y++
              } else if (beam.direction === "up") {
                beam.direction = "left"
                beam.x--
              } else if (beam.direction === "down") {
                beam.direction = "right"
                beam.x++
              }
              break
            case "|":
              if (beam.direction === "down" || beam.direction === "up") {
                nextPosition = moves[beam.direction].shift(beam)
                beam.x = nextPosition.x
                beam.y = nextPosition.y
              } else {
                // Split beam
                beams.push({
                  x: beam.x,
                  y: beam.y + 1,
                  direction: "down",
                  state: "active",
                })
                beam.direction = "up"
                beam.y--
              }
              break
            case "-":
              if (beam.direction === "left" || beam.direction === "right") {
                nextPosition = moves[beam.direction].shift(beam)
                beam.x = nextPosition.x
                beam.y = nextPosition.y
              } else {
                // Split beam
                beams.push({
                  x: beam.x + 1,
                  y: beam.y,
                  direction: "right",
                  state: "active",
                })
                beam.direction = "left"
                beam.x--
              }
              break
          }
        } else {
          beam.state = "complete"
        }
      })
  }

  // Count how many tiles have been energised
  return visitedTiles.size
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
