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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
