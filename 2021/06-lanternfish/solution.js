const part1 = (input, days) => {
  const timers = input
    .trim()
    .split(",")
    .map((value) => parseInt(value, 10))

  for (let i = 0; i < days; i++) {
    // Loop until length of timers at start of iteration to
    // prevent new fish from being updated
    const currentLength = timers.length
    for (let j = 0; j < currentLength; j++) {
      // Decrement timer until 0, then spawn new fish and reset timer to 6
      const timer = timers[j]
      if (timer > 0) {
        timers[j] = timer - 1
      } else {
        timers[j] = 6
        timers.push(8)
      }
    }
  }

  return timers.length
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
