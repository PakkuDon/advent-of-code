const part1 = (input) => {
  const ranges = input
    .trim()
    .split(",")
    .map((range) => range.split("-").map((value) => Number(value)))
  const invalidIds = []

  // Find invalid IDs - IDs that are repeating sequences of digits
  ranges.forEach(([min, max]) => {
    for (let i = min; i <= max; i++) {
      const id = `${i}`
      // Reject odd-length IDs as these can't have matching halves
      if (id.length % 2 !== 0) {
        continue
      }
      const [a, b] = [
        id.substring(0, id.length / 2),
        id.substring(id.length / 2),
      ]
      if (a === b) {
        invalidIds.push(Number(id))
      }
    }
  })

  return invalidIds.reduce((total, current) => total + current, 0)
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
