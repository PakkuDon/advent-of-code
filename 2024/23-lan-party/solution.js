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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
