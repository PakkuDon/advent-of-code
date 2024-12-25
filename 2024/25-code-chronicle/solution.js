const part1 = (input) => {
  // Parse input
  const grids = input
    .trim()
    .split("\n\n")
    .map((grid) => grid.split("\n"))
  const keys = []
  const locks = []

  // Determine which grids represent locks or keys
  grids.forEach((grid) => {
    if (grid[0].match(/^#+$/)) {
      locks.push(grid)
    } else {
      keys.push(grid)
    }
  })

  // Count how many lock / key combos fit
  let count = 0
  for (let i = 0; i < locks.length; i++) {
    const lock = locks[i]
    for (let j = 0; j < keys.length; j++) {
      const key = keys[j]
      let isMatch = true

      for (let y = 0; y < key.length; y++) {
        for (let x = 0; x < key[y].length; x++) {
          if (key[y][x] === "#" && lock[y][x] === "#") {
            isMatch = false
            break
          }
        }
      }

      if (isMatch) {
        count++
      }
    }
  }

  return count
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
