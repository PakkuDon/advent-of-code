const parseGraph = (input) => {
  const graph = {}

  input
    .trim()
    .split("\n")
    .forEach((row) => {
      const segments = row.split(" -> ")
      const name = segments[0].split(" ")[0]
      const weight = Number(segments[0].match(/\d+/g)[0])
      const children = []
      if (segments[1]) {
        segments[1].split(", ").forEach((child) => children.push(child))
      }

      // Create node
      if (!graph[name]) {
        graph[name] = {}
      }
      graph[name].weight = weight
      graph[name].children = children

      // Link child nodes to current node
      children.forEach((child) => {
        if (!graph[child]) {
          graph[child] = {}
        }
        graph[child].parent = name
      })
    })

  return graph
}

const part1 = (input) => {
  const graph = parseGraph(input)

  // Find root node
  return Object.keys(graph).filter((node) => !graph[node].parent)[0]
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
