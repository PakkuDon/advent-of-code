const part1 = (input) => {
  // Get target coordinates
  const [rows, columns] = input
    .trim()
    .match(/\d+/g)
    .map((value) => Number(value))
  // Construct grid of arbitrary size to hold numbers
  const grid = new Array(rows + columns).fill().map(() => [])
  grid[0][0] = 20151125
  let columnsToFill = 1

  // Generate numbers until target cell is populated
  while (!grid[columns - 1][rows - 1]) {
    for (let i = 0; i <= columnsToFill; i++) {
      // Find previous value
      // Last column will either be to the left of current, or right-most column for diagonal sequence
      let lastColumnFilled
      if (i === 0) {
        lastColumnFilled = grid[columnsToFill - 1]
      } else {
        lastColumnFilled = grid[i - 1]
      }
      const previousValue = lastColumnFilled[lastColumnFilled.length - 1]
      const nextValue = (previousValue * 252533) % 33554393

      grid[i].push(nextValue)
    }
    columnsToFill++
  }

  // Return value at specified coordinates
  // Subtract 1 from each as arrays are zero-indexed
  return grid[columns - 1][rows - 1]
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
