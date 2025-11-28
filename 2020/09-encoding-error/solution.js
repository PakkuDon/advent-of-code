const part1 = (input, preambleLength = 25) => {
  const values = input.split("\n").map((value) => Number(value))
  const [preamble, numbers] = [
    values.slice(0, preambleLength),
    values.slice(preambleLength),
  ]

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]

    // Check if number is sum of any two numbers in preamble
    let isSumOfPreamble = false
    for (let x = 0; x < preamble.length; x++) {
      if (isSumOfPreamble) {
        break
      }

      for (let y = 0; y < preamble.length; y++) {
        if (x === y) {
          continue
        }

        if (preamble[x] + preamble[y] === number) {
          isSumOfPreamble = true
          break
        }
      }
    }

    // Return first number that is not sum of any pair in preamble
    if (!isSumOfPreamble) {
      return number
    }

    // Slide preamble along sequence
    preamble.shift()
    preamble.push(number)
  }
}

const part2 = (input, preambleLength = 25) => {
  const invalidNumber = part1(input, preambleLength)
  const numbers = input.split("\n").map((value) => Number(value))

  // Find first contiguous set that equals invalid number
  for (let i = 0; i < numbers.length; i++) {
    // From first number, scan every subset until end
    for (let windowSize = 1; windowSize + i < numbers.length; windowSize++) {
      const sequence = numbers.slice(i, windowSize)
      const sum = sequence.reduce((total, current) => total + current, 0)

      // If sequence matches invalid number return sum of min and max numbers of set
      if (sum === invalidNumber) {
        const min = Math.min(...sequence)
        const max = Math.max(...sequence)
        return min + max
      }
      // Break early if future sets cannot equal invalid number
      if (sum > invalidNumber) {
        break
      }
    }
  }
}

module.exports = {
  part1,
  part2,
}
