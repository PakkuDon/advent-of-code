const part1 = (input) => {
  const digits = input.split("").map((d) => parseInt(d))
  let sum = 0

  for (let i = 0; i < digits.length; i++) {
    const current = digits[i]
    const nextIndex = i < digits.length - 1 ? i + 1 : 0
    if (current === digits[nextIndex]) {
      sum += current
    }
  }
  return sum
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
