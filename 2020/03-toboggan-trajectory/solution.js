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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
