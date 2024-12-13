const part1 = (input) => {
  // Parse input
  const machines = input
    .trim()
    .split("\n\n")
    .map((machine) => {
      const rows = machine.split("\n").map((row) => row.match(/\d+/g))

      return {
        a: {
          x: Number(rows[0][0]),
          y: Number(rows[0][1]),
        },
        b: {
          x: Number(rows[1][0]),
          y: Number(rows[1][1]),
        },
        prize: {
          x: Number(rows[2][0]),
          y: Number(rows[2][1]),
        },
      }
    })

  // Calculate number of tokens to use for each machine
  let tokens = 0

  machines.forEach(({ a, b, prize }) => {
    // Find points where each claw lines up with prize location
    const aPresses = (prize.x * b.y - prize.y * b.x) / (a.x * b.y - a.y * b.x)
    const bPresses = (prize.y * a.x - prize.x * a.y) / (a.x * b.y - a.y * b.x)

    // Only count tokens for winnable machines
    // Machines are winnable if required presses are whole numbers (claw movements line up with prize)
    if (
      Math.round(aPresses) === aPresses &&
      Math.round(bPresses) === bPresses
    ) {
      tokens += aPresses * 3 + bPresses
    }
  })

  return tokens
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
