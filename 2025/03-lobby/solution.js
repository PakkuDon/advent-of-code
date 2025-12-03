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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
