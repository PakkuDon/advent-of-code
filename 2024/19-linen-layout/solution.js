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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
