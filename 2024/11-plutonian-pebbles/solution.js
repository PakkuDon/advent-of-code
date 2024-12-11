const part1 = (input) => {
  let stones = input
    .trim()
    .split(/\s/g)
    .map((value) => Number(value))

  for (let i = 0; i < 25; i++) {
    const newStones = []
    for (let j = 0; j < stones.length; j++) {
      const stone = stones[j]

      if (stone === 0) {
        newStones.push(1)
      } else if (stone.toString().length % 2 === 0) {
        const left = Number(
          stone.toString().slice(0, stone.toString().length / 2)
        )
        const right = Number(
          stone.toString().slice(stone.toString().length / 2)
        )
        newStones.push(left)
        newStones.push(right)
      } else {
        newStones.push(stone * 2024)
      }
    }
    stones = newStones
  }

  return stones.length
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
