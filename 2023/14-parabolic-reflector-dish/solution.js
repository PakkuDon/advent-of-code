const part1 = (input) => {
  const roundRocks = []

  // Parse input
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "O") {
        roundRocks.push({ x, y })
      }
    }
  }

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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
