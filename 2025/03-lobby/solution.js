const part1 = (input) => {
  const banks = input
    .trim()
    .split("\n")
    .map((row) => row.split("").map((value) => Number(value)))

  const maxJoltages = banks.map((bank) => {
    let max = 0

    for (let i = 0; i < bank.length; i++) {
      for (let j = i; j < bank.length; j++) {
        if (i === j) {
          continue
        }
        const current = Number(bank[i] + "" + bank[j])
        if (current > max) {
          max = current
        }
      }
    }
    return max
  })

  return maxJoltages.reduce((total, joltage) => total + joltage, 0)
}

const part2 = (input) => {
  const banks = input
    .trim()
    .split("\n")
    .map((row) => row.split("").map((value) => Number(value)))

  // Find max joltage for each bank
  const maxJoltages = banks.map((bank) => {
    let maxJoltage = ""
    let currentIndex = 0

    for (
      let batteriesRequired = 12;
      batteriesRequired > 0;
      batteriesRequired--
    ) {
      // Limit search from inspected batteries to bank - number of batteries required
      // Ensures that we have enough remaining batteries to complete sequence
      const remaining = bank.slice(
        currentIndex,
        bank.length - batteriesRequired + 1
      )
      const maxDigit = Math.max(...remaining)

      currentIndex += remaining.indexOf(maxDigit) + 1
      maxJoltage += maxDigit
    }

    return Number(maxJoltage)
  })

  return maxJoltages.reduce((total, joltage) => total + joltage, 0)
}

module.exports = {
  part1,
  part2,
}
