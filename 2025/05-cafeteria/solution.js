const part1 = (input) => {
  // Parse input
  const [rangeIdsInput, ingredientIdsInput] = input.trim().split("\n\n")
  const ranges = rangeIdsInput
    .split("\n")
    .map((row) => row.split("-").map((value) => Number(value)))
  const ingredientIds = ingredientIdsInput
    .split("\n")
    .map((value) => Number(value))

  // Find fresh ingredient IDs
  const freshIngredientIds = []

  ingredientIds.forEach((id) => {
    let withinRange = false
    for (let i = 0; i < ranges.length; i++) {
      if (id >= ranges[i][0] && id <= ranges[i][1]) {
        withinRange = true
        break
      }
    }

    if (withinRange) {
      freshIngredientIds.push(id)
    }
  })

  return freshIngredientIds.length
}

const part2 = (input) => {
  // Parse input
  const [rangeIdsInput] = input.trim().split("\n\n")
  const ranges = rangeIdsInput
    .split("\n")
    .map((row) => row.split("-").map((value) => Number(value)))

  // Merge overlapping ranges
  const sortedRanges = ranges.toSorted(([minA], [minB]) => minA - minB)
  const mergedRanges = []
  mergedRanges.push(sortedRanges[0])

  for (let i = 1; i < sortedRanges.length; i++) {
    const previous = mergedRanges[mergedRanges.length - 1]
    const current = sortedRanges[i]

    // If current range does not overlap with previous range
    // add current range as new range
    if (current[0] > previous[1]) {
      mergedRanges.push(current)
    }
    // Else merge range with previous range
    else {
      mergedRanges.pop()
      mergedRanges.push([previous[0], Math.max(previous[1], current[1])])
    }
  }

  return mergedRanges.reduce(
    (total, range) => total + range[1] - range[0] + 1,
    0
  )
}

module.exports = {
  part1,
  part2,
}
