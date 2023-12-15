const part1 = (input) => {
  const instructions = input.trim().split(",")
  let sum = 0

  instructions.forEach((instruction) => {
    let value = 0
    for (let i = 0; i < instruction.length; i++) {
      const char = instruction[i]
      value += char.charCodeAt(0)
      value *= 17
      value %= 256
    }

    sum += value
  })

  return sum
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
