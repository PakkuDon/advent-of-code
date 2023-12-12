const part1 = (input) => {
  let sum = 0

  input
    .trim()
    .split("\n")
    .forEach((row) => {
      const [sequence, springInput] = row.split(" ")
      const requiredSpringCount = springInput
        .split(",")
        .map((value) => parseInt(value, 10))
      const arrangements = new Set()

      // Find index of unknown elements
      const unknownIndexes = []
      for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === "?") {
          unknownIndexes.push(i)
        }
      }

      // Generate bitmasks for permutations
      let masks = []
      let i = 0
      while (i.toString(2).length <= unknownIndexes.length) {
        masks.push(i.toString(2))
        i++
      }
      let maxMaskSize = Number.MIN_SAFE_INTEGER
      masks.forEach((mask) => {
        if (mask.length > maxMaskSize) {
          maxMaskSize = mask.length
        }
      })
      for (let i = 0; i < masks.length; i++) {
        masks[i] = masks[i].padStart(maxMaskSize, "0")
      }

      // Find possible arrangements by applying bitmasks
      masks.forEach((mask) => {
        let arrangement = [...sequence]
        mask.split("").forEach((bit, index) => {
          let char = bit === "0" ? "." : "#"
          arrangement[unknownIndexes[index]] = char
        })
        arrangements.add(arrangement.join(""))
      })

      // Count number of permutations that match required counts
      const matchingArrangements = [...arrangements].filter((arrangement) => {
        const counts = arrangement
          .split(".")
          .filter((group) => group)
          .map((group) => group.length)
        if (counts.length !== requiredSpringCount.length) {
          return false
        }
        return counts.every(
          (count, index) => count === requiredSpringCount[index]
        )
      })
      sum += matchingArrangements.length
    })

  return sum
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
