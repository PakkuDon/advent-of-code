const countStonesAfterBlinks = (initialState, blinks) => {
  const amountsPerStone = new Map()

  initialState.forEach((stone) => {
    if (!amountsPerStone[stone]) {
      amountsPerStone[stone] = 0
    }
    amountsPerStone[stone]++
  })

  for (let i = 0; i < blinks; i++) {
    for (const [key, amount] of Object.entries(amountsPerStone)) {
      const stone = Number(key)
      amountsPerStone[stone] -= amount

      if (stone === 0) {
        if (!amountsPerStone[1]) {
          amountsPerStone[1] = 0
        }
        amountsPerStone[1] += amount
      } else if (stone.toString().length % 2 === 0) {
        const left = Number(
          stone.toString().slice(0, stone.toString().length / 2)
        )
        const right = Number(
          stone.toString().slice(stone.toString().length / 2)
        )
        if (!amountsPerStone[left]) {
          amountsPerStone[left] = 0
        }
        if (!amountsPerStone[right]) {
          amountsPerStone[right] = 0
        }
        amountsPerStone[left] += amount
        amountsPerStone[right] += amount
      } else {
        if (!amountsPerStone[stone * 2024]) {
          amountsPerStone[stone * 2024] = 0
        }
        amountsPerStone[stone * 2024] += amount
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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
