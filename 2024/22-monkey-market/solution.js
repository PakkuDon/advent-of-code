const part1 = (input) => {
  // Parse input
  const numbers = input
    .trim()
    .split("\n")
    .map((value) => BigInt(value))

  // Calculate secret numbers after 2000 iterations
  for (let i = 0; i < 2000; i++) {
    for (let j = 0; j < numbers.length; j++) {
      let number = numbers[j]
      number = (number ^ (number * 64n)) % 16777216n
      number = ((number / 32n) ^ number) % 16777216n
      number = ((number * 2048n) ^ number) % 16777216n
      numbers[j] = number
    }
  }

  // Return sum of secret numbers
  return numbers.reduce((total, value) => total + value, 0n)
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
