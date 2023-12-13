const part1 = (input) => {
  let count = 0

  input
    .trim()
    .split("\n")
    .forEach((row) => {
      const [sequence, springInput] = row.split(" ")
      const requiredSpringCount = springInput
        .split(",")
        .map((value) => parseInt(value, 10))

      // Find position of unknown elements (?)
      const unknownIndexes = []
      for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === "?") {
          unknownIndexes.push(i)
        }
      }

      // Generate permutations
      for (let i = 0; i < Math.pow(2, unknownIndexes.length); i++) {
        const mask = i.toString(2).padStart(unknownIndexes.length, "0")
        let arrangement = [...sequence]

        mask.split("").forEach((bit, index) => {
          let char = bit === "0" ? "." : "#"
          arrangement[unknownIndexes[index]] = char
        })

        const counts = arrangement
          .join("")
          .split(".")
          .filter((group) => group)
          .map((group) => group.length)
        if (
          counts.length === requiredSpringCount.length &&
          counts.every((count, index) => count === requiredSpringCount[index])
        ) {
          count++
        }
      }
    })

  return count
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
