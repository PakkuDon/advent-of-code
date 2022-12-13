const isOrdered = (left, right) => {
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
    const ordered = isOrdered(left[i], right[i])
    if (ordered !== 0) {
      return ordered
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
    if (isOrdered(left, right) === 1) {
      indicesOfOrderedPairs.push(i)
    }
  }

  return indicesOfOrderedPairs.reduce(
    (total, current) => total + current + 1,
    0
  )
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
