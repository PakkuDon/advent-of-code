const part1 = (input) => {
  const grid = input.split("\n").map((row) => row.split(""))
  let count = 0
  const current = { x: 0, y: 0 }

  while (current.y < grid.length - 1) {
    current.x = (current.x + 3) % grid[current.y].length
    current.y++

    if (grid[current.y][current.x] === "#") {
      count++
    }
  }

  return count
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
    let treeCount = 0
    let current = { x: 0, y: 0 }
    while (current.y < grid.length - 1) {
      current = slope(current)
      current.x = current.x % grid[0].length

      if (grid[current.y][current.x] === "#") {
        treeCount++
      }
    }
    counts.push(treeCount)
  })

  return counts.reduce((total, current) => total * current)
}

module.exports = {
  part1,
  part2,
}
