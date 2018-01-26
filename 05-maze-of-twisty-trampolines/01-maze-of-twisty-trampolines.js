const call = (instructions) => {
  instructions = instructions.slice()
  let currentPosition = 0
  let stepsTaken = 0

  while (currentPosition < instructions.length) {
    const previousPosition = currentPosition
    currentPosition += instructions[currentPosition]

    instructions[previousPosition]++
    stepsTaken++
  }

  return stepsTaken
}

module.exports = {
  call,
}
