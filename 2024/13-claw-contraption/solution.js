const calculateTokensToWin = ({ a, b, prize }) => {
  const aPresses = (prize.x * b.y - prize.y * b.x) / (a.x * b.y - a.y * b.x)
  const bPresses = (prize.y * a.x - prize.x * a.y) / (a.x * b.y - a.y * b.x)

  // Only count tokens for winnable machines
  // Machines are winnable if required presses are whole numbers (claw movements line up with prize)
  if (Math.round(aPresses) === aPresses && Math.round(bPresses) === bPresses) {
    return aPresses * 3 + bPresses
  }
  return 0
}

const parseInput = (input) => {
  return input
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
}

const part1 = (input) => {
  const machines = parseInput(input)

  return machines.reduce(
    (total, machine) => total + calculateTokensToWin(machine),
    0
  )
}

const part2 = (input) => {
  const machines = parseInput(input)

  // Correct prize location
  machines.forEach(({ prize }) => {
    prize.x += 10000000000000
    prize.y += 10000000000000
  })

  return machines.reduce(
    (total, machine) => total + calculateTokensToWin(machine),
    0
  )
}

module.exports = {
  part1,
  part2,
}
