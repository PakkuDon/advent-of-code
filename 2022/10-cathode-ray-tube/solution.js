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

const part2 = (instructions) => {
  const screenLength = 40
  const screenHeight = 6
  const screen = new Array(screenHeight)
    .fill()
    .map((_) => new Array(screenLength).fill().map(() => "."))
  let canAdd = false
  let spritePosition = 1
  let cycles = 0

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i]
    const x = cycles % screenLength

    if (Math.abs(spritePosition - x) <= 1) {
      const y = Math.floor(cycles / screenLength)
      screen[y][x] = "#"
    }

    if (instruction.includes("addx")) {
      if (canAdd) {
        const amountToAdd = parseInt(instruction.split(" ")[1], 10)
        spritePosition += amountToAdd
        canAdd = false
      } else {
        canAdd = true
        // Reset current pointer as addx takes two cycles to complete
        i--
      }
    }
    cycles++
  }

  return screen.map((row) => row.join("")).join("\n")
}

module.exports = {
  part1,
  part2,
}
