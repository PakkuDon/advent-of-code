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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
