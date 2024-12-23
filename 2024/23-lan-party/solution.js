const part1 = (input) => {
  // Parse input
  const connections = input.trim().split("\n")
  const graph = {}

  connections.forEach((connection) => {
    const [a, b] = connection.split("-")
    if (!graph[a]) {
      graph[a] = []
    }
    graph[a].push(b)
    if (!graph[b]) {
      graph[b] = []
    }
    graph[b].push(a)
  })

  // Find networks where computers are connected to two other machines
  const interconnectedComputers = new Set()
  const computers = Object.keys(graph)
  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers.length; j++) {
      if (i === j) {
        continue
      }

      for (let k = 0; k < computers.length; k++) {
        if (i === k || j === k) {
          continue
        }

        const a = computers[i]
        const b = computers[j]
        const c = computers[k]

        if (
          graph[a].includes(b) &&
          graph[a].includes(c) &&
          graph[b].includes(a) &&
          graph[b].includes(c) &&
          graph[c].includes(a) &&
          graph[c].includes(b)
        ) {
          interconnectedComputers.add([a, b, c].sort().join(","))
        }
      }
    }
  }

  // Find networks with a machine starting with t
  const matching = [...interconnectedComputers].filter((computers) =>
    computers.split(",").some((comp) => comp.startsWith("t"))
  )
  return matching.length
}

// Bron-Kerbosch algorithm
// X parameter excluded as this did not seem to affect the final result
// https://en.wikipedia.org/wiki/Bron%E2%80%93Kerbosch_algorithm
const findLargestNetwork = (graph) => {
  const largestClique = []

  // R represents current clique, whereas P represents elements to add to clique
  const bronKerbosch = (R, P) => {
    // Return when P set empty as there are no further elements to add to clique
    if (P.length === 0) {
      // If current clique is larger than recorded clique
      // replace largest clique with current R
      if (R.length > largestClique.length) {
        largestClique.splice(0, largestClique.length)
        largestClique.push(...R)
      }
      return
    }

    // Only test non-neighbours as neighbours should be part of largest set
    const pivotVertex = P[0]
    const otherNeighbours = P.filter((key) => !graph[pivotVertex].includes(key))

    otherNeighbours.forEach((node) => {
      bronKerbosch(
        [...R, node],
        P.filter((computer) => graph[node].includes(computer))
      )

      // Remove node from further lookups
      P = P.filter((n) => n !== node)
    })
  }

  bronKerbosch([], Object.keys(graph))
  return largestClique
}

const part2 = (input) => {
  // Parse input
  const connections = input.trim().split("\n")
  const graph = {}

  connections.forEach((connection) => {
    const [a, b] = connection.split("-")
    if (!graph[a]) {
      graph[a] = []
    }
    graph[a].push(b)
    if (!graph[b]) {
      graph[b] = []
    }
    graph[b].push(a)
  })

  // Return computers in largest network, sorted alphabetically
  const largestNetwork = findLargestNetwork(graph)
  return largestNetwork.sort().join(",")
}

module.exports = {
  part1,
  part2,
}
