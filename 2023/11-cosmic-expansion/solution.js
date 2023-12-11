const part1 = (input) => {
  const galaxies = []
  const grid = []
  let sum = 0
  // Parse input
  input
    .trim()
    .split("\n")
    .forEach((row) => {
      // Expand empty rows
      if (!row.includes("#")) {
        grid.push(row.split(""))
      }
      grid.push(row.split(""))
    })

  // Expand empty columns
  for (let x = 0; x < grid[0].length; x++) {
    const column = []
    for (let y = 0; y < grid.length; y++) {
      column.push(grid[y][x])
    }
    if (column.every((char) => char === ".")) {
      for (let y = 0; y < grid.length; y++) {
        grid[y].splice(x, 0, ".")
      }
      // Increment x to avoid loop from processing same column
      x++
    }
  }

  // Locate galaxies
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "#") {
        galaxies.push({ x, y })
      }
    }
  }

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
    const galaxy = galaxies[a]
    const other = galaxies[b]
    distances.push(Math.abs(galaxy.x - other.x) + Math.abs(galaxy.y - other.y))
  })

  return distances.reduce((total, current) => total + current, 0)
}

const part2 = (input, growth) => {
  const galaxies = []
  const grid = input.trim().split("\n")

  // Parse galaxies
  grid.forEach((row, y) => {
    const cells = row.split("")
    for (let x = 0; x < cells.length; x++) {
      if (cells[x] === "#") {
        galaxies.push({ x, y, originalX: x, originalY: y })
      }
    }
  })

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
    const galaxy = galaxies[a]
    const other = galaxies[b]
    const distance = Math.abs(galaxy.x - other.x) + Math.abs(galaxy.y - other.y)
    distances.push(distance)
  })
  return distances.reduce((total, current) => total + current, 0)
}

module.exports = {
  part1,
  part2,
}
