const part1 = (input) => {
  const rows = input.trim().split("\n")

  // Find most-frequent character in each column
  const chars = []
  for (let i = 0; i < rows[0].length; i++) {
    const tally = {}

    for (let j = 0; j < rows.length; j++) {
      const char = rows[j][i]
      tally[char] = (tally[char] || 0) + 1
    }

    const frequentChar = Object.keys(tally).filter(
      (key) => tally[key] === Math.max(...Object.values(tally))
    )
    chars.push(frequentChar)
  }

  // Return message formed by most-frequent chars
  return chars.join("")
}

const part2 = (input) => {
  const rows = input.trim().split("\n")

  // Find most-frequent character in each column
  const chars = []
  for (let i = 0; i < rows[0].length; i++) {
    const tally = {}

    for (let j = 0; j < rows.length; j++) {
      const char = rows[j][i]
      tally[char] = (tally[char] || 0) + 1
    }

    const frequentChar = Object.keys(tally).filter(
      (key) => tally[key] === Math.min(...Object.values(tally))
    )
    chars.push(frequentChar)
  }

  // Return message formed by most-frequent chars
  return chars.join("")
}

module.exports = {
  part1,
  part2,
}
