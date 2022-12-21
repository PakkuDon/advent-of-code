const part1 = (values) => {
  let list = []

  // Construct linked list from values
  values.forEach((value, index) => {
    list.push({ value, index })
  })

  // Move elements into their corresponding location
  values.forEach((value, currentIndex) => {
    let indexInList = list.findIndex((node) => node.index === currentIndex)

    list.splice(indexInList, 1)
    list.splice((value + indexInList) % list.length, 0, value)
  })

  // Get sum of coordinates
  const zeroIndex = list.findIndex((value) => value === 0)
  return [1000, 2000, 3000].reduce(
    (total, current) => total + list[(current + zeroIndex) % list.length],
    0
  )
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
