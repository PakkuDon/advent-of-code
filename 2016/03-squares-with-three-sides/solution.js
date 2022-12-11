const part1 = (rows) =>
  rows.filter((row) => {
    const lengths = row
      .trim()
      .split(/\s+/g)
      .map((length) => parseInt(length, 10))

    const [a, b, c] = lengths.sort((a, b) => (a > b ? 1 : -1))
    return a + b > c
  }).length

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
