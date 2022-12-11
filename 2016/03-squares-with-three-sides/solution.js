const part1 = (rows) =>
  rows.filter((row) => {
    const lengths = row
      .trim()
      .split(/\s+/g)
      .map((length) => parseInt(length, 10))

    const [a, b, c] = lengths.sort((a, b) => (a > b ? 1 : -1))
    return a + b > c
  }).length

const part2 = (rows) => {
  const trianglesLengths = []
  for (let i = 0; i < rows.length; i += 3) {
    const matrix = rows.map((row) =>
      row
        .trim()
        .split(/\s+/g)
        .map((value) => parseInt(value, 10))
    )
    for (let j = 0; j < 3; j++) {
      trianglesLengths.push([matrix[i][j], matrix[i + 1][j], matrix[i + 2][j]])
    }
  }

  return trianglesLengths.filter((lengths) => {
    const [a, b, c] = lengths.sort((a, b) => (a > b ? 1 : -1))
    return a + b > c
  }).length
}

module.exports = {
  part1,
  part2,
}
