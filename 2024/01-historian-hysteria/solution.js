const part1 = (input) => {
  const listA = []
  const listB = []
  input
    .trim()
    .split("\n")
    .forEach((row) => {
      const numbers = row.split(/\s+/)
      listA.push(parseInt(numbers[0], 10))
      listB.push(parseInt(numbers[1], 10))
    })

  listA.sort()
  listB.sort()

  let totalDistance = 0
  listA.forEach((number, index) => {
    const otherNumber = listB[index]
    totalDistance += Math.abs(number - otherNumber)
  })

  return totalDistance
}

const part2 = (input) => {
  const listA = []
  const listB = []
  input
    .trim()
    .split("\n")
    .forEach((row) => {
      const numbers = row.split(/\s+/)
      listA.push(parseInt(numbers[0], 10))
      listB.push(parseInt(numbers[1], 10))
    })

  let similarityScore = 0
  listA.forEach((number) => {
    const count = listB.filter((value) => value === number).length
    similarityScore += number * count
  })

  return similarityScore
}

module.exports = {
  part1,
  part2,
}
