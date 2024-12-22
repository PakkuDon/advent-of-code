const generateNextSecretNumber = (number) => {
  let secretNumber = (number ^ (number * 64n)) % 16777216n
  secretNumber = ((secretNumber / 32n) ^ secretNumber) % 16777216n
  secretNumber = ((secretNumber * 2048n) ^ secretNumber) % 16777216n
  return secretNumber
}

const part1 = (input) => {
  // Parse input
  const numbers = input
    .trim()
    .split("\n")
    .map((value) => BigInt(value))

  // Calculate secret numbers after 2000 iterations
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < 2000; j++) {
      numbers[i] = generateNextSecretNumber(numbers[i])
    }
  }

  // Return sum of secret numbers
  return numbers.reduce((total, value) => total + value, 0n)
}

const part2 = (input) => {
  // Parse input
  const numbers = input
    .trim()
    .split("\n")
    .map((value) => BigInt(value))

  // Generate sequences for each buyer
  const bananasPerSequence = {}
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i]
    const digits = []
    const changes = []
    digits.push(Number(number) % 10)
    const seenForBuyer = {}

    // Calculate changes in 1s position for buyer after 2000 iterations
    for (let j = 0; j < 2000; j++) {
      numbers[i] = generateNextSecretNumber(numbers[i])
      const digit = Number(numbers[i]) % 10
      if (digits.length > 0) {
        changes.push(digit - digits[digits.length - 1])
      }
      digits.push(digit)

      const lastChanges = changes.slice(-4)
      const sequence = lastChanges.join(",")
      if (!seenForBuyer[sequence]) {
        seenForBuyer[sequence] = 1
        if (!bananasPerSequence[sequence]) {
          bananasPerSequence[sequence] = 0
        }
        bananasPerSequence[sequence] += digit
      }
    }
  }

  return Math.max(...Object.values(bananasPerSequence))
}

module.exports = {
  part1,
  part2,
}
