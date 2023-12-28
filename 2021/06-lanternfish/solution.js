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

const part2 = (input, days) => {
  // Store counts of fish with each timer
  const timers = []
  input
    .trim()
    .split(",")
    .forEach((value) => {
      const index = parseInt(value, 10)
      if (!timers[index]) {
        timers[index] = 0
      }
      timers[index]++
    })

  // Fill in gaps so that timers has entries for each possible timer value
  for (let i = 0; i <= 9; i++) {
    if (!timers[i]) {
      timers[i] = 0
    }
  }
  for (let i = 0; i < days; i++) {
    // Reset timers for any fish with 0 timer to 6, then spawn new fish
    // Target timers are +1 from desired value to account for next step in loop
    timers[9] += timers[0]
    timers[7] += timers[0]
    timers[0] = 0

    // Update timers for all other buckets
    for (let j = 1; j < timers.length; j++) {
      timers[j - 1] += timers[j]
      timers[j] = 0
    }
  }

  return timers.reduce((total, current) => total + current, 0)
}

module.exports = {
  part1,
  part2,
}
