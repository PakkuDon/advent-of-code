const part1 = (input) => {
  const rows = input.split("\n")
  let sum = 0
  rows.forEach((row) => {
    const [winningInput, numbersInput] = row.split(": ")[1].split(" | ")
    const winningNumbers = winningInput
      .trim()
      .split(/\s+/)
      .map((number) => parseInt(number, 10))
    const numbersYouHave = numbersInput
      .trim()
      .split(/\s+/)
      .map((number) => parseInt(number, 10))

    let score = 0
    numbersYouHave.forEach((number) => {
      if (winningNumbers.includes(number)) {
        if (score) {
          score = score * 2
        } else {
          score = 1
        }
      }
    })

    sum += score
  })

  return sum
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
