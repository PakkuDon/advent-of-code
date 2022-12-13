const comparator = (left, right) => {
  if (Number.isInteger(left) && Number.isInteger(right)) {
    if (left === right) {
      return 0
    } else if (left < right) {
      return 1
    } else {
      return -1
    }
  }

  if (!Array.isArray(left)) {
    left = [left]
  }
  if (!Array.isArray(right)) {
    right = [right]
  }

  for (let i = 0; i < Math.min(left.length, right.length); i++) {
    const difference = comparator(left[i], right[i])
    if (difference !== 0) {
      return difference
    }
  }

  if (left.length < right.length) {
    return 1
  } else if (left.length > right.length) {
    return -1
  } else {
    return 0
  }
}

const part1 = (input) => {
  const pairs = input.split("\n\n").map((pair) =>
    pair
      .trim()
      .split("\n")
      .map((value) => eval(value))
  )
  const indicesOfOrderedPairs = []

  for (let i = 0; i < pairs.length; i++) {
    const [left, right] = pairs[i]
    if (comparator(left, right) === 1) {
      indicesOfOrderedPairs.push(i)
    }
  }

  return indicesOfOrderedPairs.reduce(
    (total, current) => total + current + 1,
    0
  )
}

const part2 = (input) => {
  const packets = input
    .split("\n")
    .map((row) => row.trim())
    .filter((row) => row)
    .map((value) => eval(value))

  packets.push([[2]])
  packets.push([[6]])

  const sortedPackets = packets.slice().sort(comparator).reverse()

  const startIndex = sortedPackets.findIndex(
    (packet) => JSON.stringify(packet) === "[[2]]"
  )
  const endIndex = sortedPackets.findIndex(
    (packet) => JSON.stringify(packet) === "[[6]]"
  )

  return (startIndex + 1) * (endIndex + 1)
}

module.exports = {
  part1,
  part2,
}
