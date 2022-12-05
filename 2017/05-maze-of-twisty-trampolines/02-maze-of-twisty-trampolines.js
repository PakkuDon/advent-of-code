const call = (instructions) => {
  instructions = instructions.slice()
  let currentPosition = 0
  let stepsTaken = 0

  while (currentPosition < instructions.length) {
    const previousPosition = currentPosition
    currentPosition += instructions[currentPosition]

    instructions[previousPosition] += getIncrement(
      instructions[previousPosition]
    )
    stepsTaken++
  }

  return stepsTaken
}

const getIncrement = (currentOffset) => (currentOffset >= 3 ? -1 : 1)

module.exports = {
  call,
  getIncrement,
}
