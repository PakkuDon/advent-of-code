const parseInput = (input) => {
  const graph = {}
  input.split("\n").forEach((link) => {
    const [_, origin, destination, cost] = link.match(/(\w+) to (\w+) = (\d+)/)
    if (!graph[origin]) {
      graph[origin] = { neighbours: {} }
    }
    if (!graph[destination]) {
      graph[destination] = { neighbours: {} }
    }
    graph[origin].neighbours[destination] = parseInt(cost, 10)
    graph[destination].neighbours[origin] = parseInt(cost, 10)
  })

  return graph
}

// From https://rosettacode.org/wiki/Permutations#JavaScript
const generatePermutations = (list) => {
  if (list.length < 2) {
    return [list]
  }
  const permutations = []
  for (let i = 0; i < list.length; i++) {
    const element = list.splice(i, 1)[0]
    const subsequence = generatePermutations(list)

    for (let j = 0; j < subsequence.length; j++) {
      permutations.push([element, ...subsequence[j]])
    }
    list.splice(i, 0, element)
  }

  return permutations
}

const part1 = (input) => {
  const graph = parseInput(input)
  const possibleRoutes = generatePermutations(Object.keys(graph))

  let shortestDistance = Number.MAX_SAFE_INTEGER
  possibleRoutes.forEach((route) => {
    let current = route[0]
    let cost = 0
    for (let i = 1; i < route.length; i++) {
      cost += graph[current].neighbours[route[i]]
      current = route[i]
    }

    if (cost < shortestDistance) {
      shortestDistance = cost
    }
  })

  return shortestDistance
}

const part2 = (input) => {
  const graph = parseInput(input)
  const possibleRoutes = generatePermutations(Object.keys(graph))

  let longestDistance = Number.MIN_SAFE_INTEGER
  possibleRoutes.forEach((route) => {
    let current = route[0]
    let cost = 0
    for (let i = 1; i < route.length; i++) {
      cost += graph[current].neighbours[route[i]]
      current = route[i]
    }

    if (cost > longestDistance) {
      longestDistance = cost
    }
  })

  return longestDistance
}

module.exports = {
  part1,
  part2,
}
