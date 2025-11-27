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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
