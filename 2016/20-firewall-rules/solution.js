const part1 = (input) => {
  // Parse ranges
  const ranges = input
    .trim()
    .split("\n")
    .map((row) => row.split("-").map((value) => Number(value)))

  // Get boundary values
  const values = ranges.map((range) => range[1] + 1)

  // Find lowest number that does not fall into any ranges
  values.sort((a, b) => a - b)
  for (let value of values) {
    if (!ranges.some(([low, high]) => value >= low && value <= high)) {
      return value
    }
  }
}

const MAX_VALUE = 4294967295
const part2 = (input) => {
  // Parse ranges
  const ranges = input
    .trim()
    .split("\n")
    .map((row) => row.split("-").map((value) => Number(value)))

  // Get boundary values
  // Lowest range starts at 0 so we only need to check ends of ranges
  const values = ranges.map((range) => range[1] + 1)

  // Count number of values that don't fall into given ranges
  // Start from boundary value, then count numbers until we reach next range
  let count = 0
  for (let value of values) {
    let i = value

    while (i < MAX_VALUE) {
      if (!ranges.some(([low, high]) => i >= low && i <= high)) {
        count++
        i++
      } else {
        break
      }
    }
  }

  return count
}

module.exports = {
  part1,
  part2,
}
