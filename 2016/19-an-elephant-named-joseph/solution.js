const part1 = (input) => {
  const numberOfElves = Number(input.trim())
  let elves = new Array(numberOfElves)
    .fill()
    .map((_, index) => ({ number: index + 1, hasPresent: true }))

  while (elves.length > 1) {
    for (let i = 0; i < elves.length; i++) {
      const elf = elves[i]
      // If current elf has present steal present from next elf
      if (elf.hasPresent) {
        // Elves sit in a circular fashion so last elf steals from first elf
        if (i < elves.length - 1) {
          elves[i + 1].hasPresent = false
        } else {
          elves[0].hasPresent = false
        }
      }
    }

    // Remove elves that don't have a present
    elves = elves.filter((elf) => elf.hasPresent)
  }

  return elves[0].number
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
