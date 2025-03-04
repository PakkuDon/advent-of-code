const parseInput = (input) =>
  input
    .trim()
    .split("\n")
    .map((row) => {
      const [discNo, numberOfPositions, time, initialPosition] = row
        .match(/\d+/g)
        .map((value) => Number(value))
      return { numberOfPositions, initialPosition }
    })

const getTimeToRetrieveCapsule = (discs) => {
  let seconds = 0
  while (true) {
    // +index to account for elapsed time after capsule has been dropped
    // +1 to account for time between button press to time capsule reaches first disc
    const positions = discs.map(
      (disc, index) =>
        (disc.initialPosition + seconds + index + 1) % disc.numberOfPositions
    )

    if (positions.every((position) => position === 0)) {
      return seconds
    }
    seconds++
  }
}

const part1 = (input) => {
  const discs = parseInput(input)
  return getTimeToRetrieveCapsule(discs)
}

const part2 = (input) => {
  const discs = parseInput(input)
  discs.push({ numberOfPositions: 11, initialPosition: 0 })
  return getTimeToRetrieveCapsule(discs)
}

module.exports = {
  part1,
  part2,
}
