const countTrees = (grid, slope) => {
  let count = 0
  let current = { x: 0, y: 0 }

  while (current.y < grid.length - 1) {
    current = slope(current)
    current.x = current.x % grid[0].length

    if (grid[current.y][current.x] === "#") {
      count++
    }
  }

  return count
}

const part1 = (input) => {
  const grid = input.split("\n").map((row) => row.split(""))
  return countTrees(grid, (position) => ({
    x: position.x + 3,
    y: position.y + 1,
  }))
}

const part2 = (input) => {
  const grid = input.split("\n").map((row) => row.split(""))
  let counts = []

  const slopes = [
    (position) => ({ x: position.x + 1, y: position.y + 1 }),
    (position) => ({ x: position.x + 3, y: position.y + 1 }),
    (position) => ({ x: position.x + 5, y: position.y + 1 }),
    (position) => ({ x: position.x + 7, y: position.y + 1 }),
    (position) => ({ x: position.x + 1, y: position.y + 2 }),
  ]

  slopes.forEach((slope) => {
    counts.push(countTrees(grid, slope))
  })

  return counts.reduce((total, current) => total * current)
}

module.exports = {
  part1,
  part2,
}
