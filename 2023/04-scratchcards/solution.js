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

const part2 = (input) => {
  const rows = input.split("\n")
  let cards = rows.map((row) => {
    const number = parseInt(row.split(":")[0].match(/\d+/)[0], 10)
    const [winningInput, numbersInput] = row.split(": ")[1].split(" | ")
    const winningNumbers = winningInput
      .trim()
      .split(/\s+/)
      .map((number) => parseInt(number, 10))
    const numbersYouHave = numbersInput
      .trim()
      .split(/\s+/)
      .map((number) => parseInt(number, 10))
    const matchCount = winningNumbers.filter((number) =>
      numbersYouHave.includes(number)
    ).length

    return { number, matchCount }
  })

  cards.forEach((card) => {
    const cardIdsToAdd = []
    for (let i = 1; i <= card.matchCount; i++) {
      cardIdsToAdd.push(card.number + i)
    }
    const cardsToAdd = cards.filter((card) =>
      cardIdsToAdd.includes(card.number)
    )
    card.cardsToAdd = cardsToAdd
  })

  let count = 0
  while (cards.length > 0) {
    const card = cards[0]
    cards = [...card.cardsToAdd, ...cards.slice(1)]
    count++
  }

  return count
}

module.exports = {
  part1,
  part2,
}
