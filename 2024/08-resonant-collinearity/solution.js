const part1 = (input) => {
  const grid = input.trim().split("\n")
  const height = grid.length
  const width = grid[0].length
  const antennas = {}

  // Find antenna locations
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      value = grid[y][x]
      if (value !== ".") {
        if (!antennas[value]) {
          antennas[value] = []
        }
        antennas[value].push({ x, y })
      }
    }
  }

  // Find potential antinodes
  const antinodes = new Set()
  Object.keys(antennas).forEach((antenna) => {
    const antennasWithSameFrequency = antennas[antenna]

    for (let i = 0; i < antennasWithSameFrequency.length; i++) {
      for (let j = 0; j < antennasWithSameFrequency.length; j++) {
        if (i === j) {
          continue
        }

        const a = antennasWithSameFrequency[i]
        const b = antennasWithSameFrequency[j]

        const x1 = b.x + (b.x - a.x)
        const y1 = b.y + (b.y - a.y)
        const x2 = a.x + (a.x - b.x)
        const y2 = a.y + (a.y - b.y)

        if (x1 >= 0 && x1 < width && y1 >= 0 && y1 < height) {
          antinodes.add(`${x1},${y1}`)
        }
        if (x2 >= 0 && x2 < width && y2 >= 0 && y2 < height) {
          antinodes.add(`${x2},${y2}`)
        }
      }
    }
  })

  return antinodes.size
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
