const part1 = (input) => {
  // Parse input
  const [moveInput, mapInput] = input.trim().split("\n\n")
  const nodes = {}

  mapInput.split("\n").forEach((row) => {
    const [origin, L, R] = row.match(/[A-Z]{3}/g)
    nodes[origin] = { L, R }
  })
  const moves = moveInput.split("")

  // Process steps
  let current = "AAA"
  let steps = 0
  while (current !== "ZZZ") {
    const nextStep = moves[steps % moves.length]
    current = nodes[current][nextStep]
    steps++
  }

  return steps
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
