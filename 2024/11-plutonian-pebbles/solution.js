const countStonesAfterBlinks = (initialState, blinks) => {
  const amountsPerStone = {}

  initialState.forEach((stone) => {
    amountsPerStone[stone] = (amountsPerStone[stone] || 0) + 1
  })

  for (let i = 0; i < blinks; i++) {
    for (const [key, amount] of Object.entries(amountsPerStone)) {
      const stone = Number(key)
      amountsPerStone[stone] -= amount

      if (stone === 0) {
        amountsPerStone[1] = (amountsPerStone[1] || 0) + amount
      } else if (stone.toString().length % 2 === 0) {
        const left = Number(
          stone.toString().slice(0, stone.toString().length / 2)
        )
        const right = Number(
          stone.toString().slice(stone.toString().length / 2)
        )

        amountsPerStone[left] = (amountsPerStone[left] || 0) + amount
        amountsPerStone[right] = (amountsPerStone[right] || 0) + amount
      } else {
        amountsPerStone[stone * 2024] =
          (amountsPerStone[stone * 2024] || 0) + amount
      }
    }
  }

  return Object.values(amountsPerStone).reduce(
    (total, current) => total + current,
    0
  )
}

const part1 = (input) => {
  const stones = input
    .trim()
    .split(/\s/g)
    .map((value) => Number(value))

  return countStonesAfterBlinks(stones, 25)
}

const part2 = (input) => {
  const stones = input
    .trim()
    .split(/\s/g)
    .map((value) => Number(value))

  return countStonesAfterBlinks(stones, 75)
}

module.exports = {
  part1,
  part2,
}
