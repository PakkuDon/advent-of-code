const getGalaxies = (input) => {
  const galaxies = []
  input
    .trim()
    .split("\n")
    .forEach((row, y) => {
      const cells = row.split("")
      for (let x = 0; x < cells.length; x++) {
        if (cells[x] === "#") {
          galaxies.push({ x, y, originalX: x, originalY: y })
        }
      }
    })

  return galaxies
}

const expandCoordinates = (input, galaxies, growth) => {
  const grid = input.trim().split("\n")
  // Expand y coordinates
  for (let y = 0; y < grid.length; y++) {
    if (!grid[y].includes("#")) {
      galaxies
        .filter((galaxy) => galaxy.originalY > y)
        .forEach((galaxy) => {
          galaxy.y += growth - 1
        })
    }
  }

  // Expand x coordinates
  for (let x = 0; x < grid[0].length; x++) {
    const column = []
    for (let y = 0; y < grid.length; y++) {
      column.push(grid[y][x])
    }
    if (column.every((char) => char === ".")) {
      galaxies
        .filter((galaxy) => galaxy.originalX > x)
        .forEach((galaxy) => {
          galaxy.x += growth - 1
        })
    }
  }
}

const getDistance = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y)

const part1 = (input) => {
  const galaxies = getGalaxies(input)
  expandCoordinates(input, galaxies, 2)

  // Generate possible pairs
  const pairs = new Set()
  for (let i = 0; i < galaxies.length; i++) {
    for (let j = 0; j < galaxies.length; j++) {
      if (i === j) {
        continue
      }
      // Sort ints to prevent same pair from being processed twice
      pairs.add([i, j].sort().join(","))
    }
  }

  // Calculate sum of distances from each galaxy to another
  const distances = []
  pairs.forEach((pair) => {
    const [a, b] = pair.split(",").map((value) => parseInt(value, 10))
    const distance = getDistance(galaxies[a], galaxies[b])
    distances.push(distance)
  })

  return distances.reduce((total, current) => total + current, 0)
}

const part2 = (input, growth) => {
  const galaxies = getGalaxies(input)
  expandCoordinates(input, galaxies, growth)

  // Generate possible pairs
  const pairs = new Set()
  for (let i = 0; i < galaxies.length; i++) {
    for (let j = 0; j < galaxies.length; j++) {
      if (i === j) {
        continue
      }
      // Sort ints to prevent same pair from being processed twice
      pairs.add([i, j].sort().join(","))
    }
  }

  // Calculate sum of distances from each galaxy to another
  const distances = []
  pairs.forEach((pair) => {
    const [a, b] = pair.split(",").map((value) => parseInt(value, 10))
    const distance = getDistance(galaxies[a], galaxies[b])
    distances.push(distance)
  })
  return distances.reduce((total, current) => total + current, 0)
}

module.exports = {
  part1,
  part2,
}
