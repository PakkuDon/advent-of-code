const parseGraphInput = (input) => {
  const graph = {}

  input.split("\n").forEach((row) => {
    const [origin, L, R] = row.match(/[\dA-Z]{3}/g)
    graph[origin] = { L, R }
  })

  return graph
}

const calculateStepsToEnd = ({ graph, moves, origin, isComplete }) => {
  let steps = 0
  let current = origin

  while (!isComplete(current)) {
    const nextStep = moves[steps % moves.length]
    current = graph[current][nextStep]
    steps++
  }

  return steps
}

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
  const [moveInput, graphInput] = input.trim().split("\n\n")
  const nodes = parseGraphInput(graphInput)
  const moves = moveInput.split("")

  return calculateStepsToEnd({
    graph: nodes,
    moves,
    origin: "AAA",
    isComplete: (current) => current === "ZZZ",
  })
}

const part2 = (input) => {
  // Parse input
  const [moveInput, graphInput] = input.trim().split("\n\n")
  const nodes = parseGraphInput(graphInput)
  const moves = moveInput.split("")

  // Calculate how many steps it takes for each starting node to reach end node
  let startingNodes = Object.keys(nodes).filter((key) => key.endsWith("A"))
  const stepsToReachZ = []
  startingNodes.forEach((node) => {
    let steps = calculateStepsToEnd({
      graph: nodes,
      moves,
      origin: node,
      isComplete: (current) => current.endsWith("Z"),
    })
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
