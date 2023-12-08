const findGreatestCommonDivisor = (a, b) => {
  if (a > 0) {
    return findGreatestCommonDivisor(b % a, a)
  }
  return b
}

const findLeastCommonMultiple = (a, b) =>
  (a * b) / findGreatestCommonDivisor(a, b)

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

const part2 = (input) => {
  // Parse input
  const [moveInput, mapInput] = input.trim().split("\n\n")
  const nodes = {}

  mapInput.split("\n").forEach((row) => {
    const [origin, L, R] = row.match(/[\dA-Z]{3}/g)
    nodes[origin] = { L, R }
  })
  const moves = moveInput.split("")

  // Calculate how many steps it takes for each starting node to reach end node
  let currentPositions = Object.keys(nodes).filter((key) => key.endsWith("A"))
  const stepsToReachZ = []
  currentPositions.forEach((current) => {
    let steps = 0
    while (!current.endsWith("Z")) {
      const nextStep = moves[steps % moves.length]
      current = nodes[current][nextStep]
      steps++
    }
    stepsToReachZ.push(steps)
  })

  return stepsToReachZ.reduce((total, current) =>
    findLeastCommonMultiple(total, current)
  )
}

module.exports = {
  part1,
  part2,
}
