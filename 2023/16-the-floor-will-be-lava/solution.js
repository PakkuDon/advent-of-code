const getTilesEnergised = (grid, initialBeam) => {
  // Follow beam path(s)
  const visitedTiles = new Set()
  const visitedTilesWithDirection = new Set()
  let beams = []
  beams.push({ ...initialBeam, state: "active" })
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

  while (beams.some((beam) => beam.state === "active")) {
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
          // Mark beam if complete if tile and direction already processed
          if (
            visitedTilesWithDirection.has(
              `${beam.direction},${beam.x},${beam.y}`
            )
          ) {
            beam.state = "complete"
          } else {
            visitedTilesWithDirection.add(
              `${beam.direction},${beam.x},${beam.y}`
            )
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
          }
        } else {
          beam.state = "complete"
        }
      })
  }

  return visitedTiles.size
}

const part1 = (input) => {
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))

  const beam = { x: 0, y: 0, direction: "right", state: "active" }
  return getTilesEnergised(grid, beam)
}

const part2 = (input) => {
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))

  const beams = []
  // Push beams for vertical edges
  for (let y = 0; y < grid.length; y++) {
    beams.push({ x: 0, y, direction: "right" })
    beams.push({ x: grid[0].length - 1, y, direction: "left" })
  }

  // Push beams for horizontal edges
  for (let x = 0; x < grid[0].length; x++) {
    beams.push({ x, y: 0, direction: "down" })
    beams.push({ x, y: grid[0].length - 1, direction: "up" })
  }

  let maxTiles = 0
  beams.forEach((beam) => {
    const tilesEnergised = getTilesEnergised(grid, beam)
    if (tilesEnergised > maxTiles) {
      maxTiles = tilesEnergised
    }
  })

  return maxTiles
}

module.exports = {
  part1,
  part2,
}
