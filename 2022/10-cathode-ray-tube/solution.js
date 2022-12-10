const part1 = (instructions) => {
  let cycleOfInterest = 20
  let canAdd = false
  let signalStrength = 1
  let cycles = 1
  let signals = []

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i]
    if (cycles === cycleOfInterest) {
      signals.push(signalStrength * cycleOfInterest)
      cycleOfInterest += 40
    }

    if (instruction.includes("addx")) {
      if (canAdd) {
        const amountToAdd = parseInt(instruction.split(" ")[1], 10)
        signalStrength += amountToAdd
        canAdd = false
      } else {
        canAdd = true
        // Reset current pointer as addx takes two cycles to complete
        i--
      }
    }
    cycles++
  }
  return signals.reduce((total, signal) => total + signal)
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
