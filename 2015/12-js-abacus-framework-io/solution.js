const part1 = (input) => {
  return (input.trim().match(/-?\d+/g) || [])
    .map((value) => parseInt(value, 10))
    .reduce((total, current) => total + current, 0)
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
