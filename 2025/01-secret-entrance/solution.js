const part1 = (input) => {
  let current = 50
  let count = 0
  const instructions = input
    .trim()
    .split("\n")
    .map((value) => ({
      direction: value[0],
      units: Number(value.substring(1)),
    }))

  instructions.forEach(({ direction, units }) => {
    let next = current
    if (direction === "L") {
      next = current - units
      while (next < 0) {
        next = 100 - Math.abs(next)
      }
    } else {
      next = (current + units) % 100
    }

    current = next
    if (current === 0) {
      count++
    }
  })

  return count
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
