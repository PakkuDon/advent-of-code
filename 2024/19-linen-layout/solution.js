const isValidDesign = (design, towels) => {
  if (design === "") {
    return true
  }

  for (let i = 0; i < towels.length; i++) {
    const towel = towels[i]
    if (design.startsWith(towel)) {
      if (isValidDesign(design.substring(towel.length), towels)) {
        return true
      }
    }
  }

  return false
}

const countWaysDesignCanBeMade = (design, towels, cache = {}) => {
  if (cache[design]) {
    return cache[design]
  }
  if (design === "") {
    return 1
  }

  let count = 0
  for (let i = 0; i < towels.length; i++) {
    const towel = towels[i]
    // Count number of ways remaining design can be made given towels available
    if (design.startsWith(towel)) {
      const substring = design.substring(towel.length)
      count += countWaysDesignCanBeMade(substring, towels, cache)
    }
  }

  // Cache count for design for future lookups
  cache[design] = count
  return cache[design]
}

const part1 = (input) => {
  const [towelInput, designsInput] = input.trim().split("\n\n")
  const towels = towelInput.split(", ")
  const designs = designsInput.split("\n")

  // Determine which designs are possible from given towels
  const possibleDesigns = designs.filter((design) => {
    return isValidDesign(design, towels)
  })

  return possibleDesigns.length
}

const part2 = (input) => {
  const [towelInput, designsInput] = input.trim().split("\n\n")
  const towels = towelInput.split(", ")
  const designs = designsInput.split("\n")

  // Determine number of ways patterns can be made given towels available
  return designs.reduce(
    (total, design) => total + countWaysDesignCanBeMade(design, towels),
    0
  )
}

module.exports = {
  part1,
  part2,
}
