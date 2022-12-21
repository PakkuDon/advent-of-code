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

const part2 = (values) => {
  const decryptionKey = 811589153
  let list = []

  // Construct linked list from values
  values.forEach((value, index) => {
    list.push({ value: value * decryptionKey, index })
  })

  for (let i = 0; i < 10; i++) {
    // Move elements into their corresponding location
    values.forEach((_, currentIndex) => {
      let index = list.findIndex((node) => node.index === currentIndex)
      const node = list[index]

      list.splice(index, 1)
      list.splice((node.value + index) % list.length, 0, node)
    })
  }

  // Get sum of coordinates
  const zeroIndex = list.findIndex((node) => node.value === 0)
  return [1000, 2000, 3000].reduce(
    (total, current) => total + list[(current + zeroIndex) % list.length].value,
    0
  )
}

module.exports = {
  part1,
  part2,
}
