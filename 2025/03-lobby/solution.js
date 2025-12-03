const getMaxJoltage = (bank, batteriesRequired) => {
  let maxJoltage = ""
  let currentIndex = 0

  for (; batteriesRequired > 0; batteriesRequired--) {
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
}

const part1 = (input) => {
  const banks = input
    .trim()
    .split("\n")
    .map((row) => row.split("").map((value) => Number(value)))

  const maxJoltages = banks.map((bank) => getMaxJoltage(bank, 2))

  return maxJoltages.reduce((total, joltage) => total + joltage, 0)
}

const part2 = (input) => {
  const banks = input
    .trim()
    .split("\n")
    .map((row) => row.split("").map((value) => Number(value)))

  const maxJoltages = banks.map((bank) => getMaxJoltage(bank, 12))

  return maxJoltages.reduce((total, joltage) => total + joltage, 0)
}

module.exports = {
  part1,
  part2,
}
