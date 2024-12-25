const cachedPaths = {}

// Find paths from start to end node
const getPathToNode = (grid, start, end) => {
  if (cachedPaths[`${start},${end}`]) {
    return cachedPaths[`${start},${end}`]
  }
  // Find start location
  const origin = {}
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === start) {
        origin.x = x
        origin.y = y
        origin.value = start
        break
      }
    }
  }

  const paths = []
  const queue = []
  queue.push({ path: "", node: { ...origin } })

  while (queue.length > 0) {
    const { path, node: current } = queue.shift()

    // Skip if current path is not shortest path
    if (paths.length > 0) {
      const minLength = Math.min(...paths.map((path) => path.length))

      if (path.length > minLength) {
        continue
      }
    }

    // If target node found, save path
    if (current.value === end) {
      paths.push(path)
    }

    // Add potential neighbours to stack to explore
    // Up
    if (current.y > 0 && grid[current.y - 1][current.x]) {
      queue.push({
        node: {
          x: current.x,
          y: current.y - 1,
          value: grid[current.y - 1][current.x],
        },
        path: path + "^",
      })
    }
    // Right
    if (grid[current.y][current.x + 1]) {
      queue.push({
        node: {
          x: current.x + 1,
          y: current.y,
          value: grid[current.y][current.x + 1],
        },
        path: path + ">",
      })
    }
    // Down
    if (current.y < grid.length - 1 && grid[current.y + 1][current.x]) {
      queue.push({
        node: {
          x: current.x,
          y: current.y + 1,
          value: grid[current.y + 1][current.x],
        },
        path: path + "v",
      })
    }
    // Left
    if (grid[current.y][current.x - 1]) {
      queue.push({
        node: {
          x: current.x - 1,
          y: current.y,
          value: grid[current.y][current.x - 1],
        },
        path: path + "<",
      })
    }
  }

  // Find lowest cost path. This is determined by:
  // - Path length
  // - How many turns are in path
  // - Locale sort (not sure why. Seems to favour horizontal movements?)
  const minLength = Math.min(...paths.map((path) => path.length))
  const minTurns = Math.min(
    ...paths.map((path) => {
      return [...path].reduce(
        (count, char, index) => (char !== path[index - 1] ? count + 1 : count),
        0
      )
    })
  )
  const shortestPaths = paths.filter((path) => {
    if (path.length === minLength) {
      const turnCount = [...path].reduce(
        (count, char, index) => (char !== path[index - 1] ? count + 1 : count),
        0
      )

      return turnCount === minTurns
    }
    return false
  })
  // Hack: Handle ties between paths with alphabetical sort
  // This seems to prioritise downward / leftward movements which yields lower cost paths
  shortestPaths.sort((a, b) => b.localeCompare(a))

  // Append "A" to represent button press
  const shortestPath = shortestPaths[0] + "A"
  // Cache for future lookup
  cachedPaths[`${start},${end}`] = shortestPath
  return shortestPath
}

const part1 = (input) => {
  // Parse input
  const codes = input.trim().split("\n")

  // Keypads
  const numericKeypad = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    [undefined, "0", "A"],
  ]
  const controller = [
    [undefined, "^", "A"],
    ["<", "v", ">"],
  ]

  // Generate instructions for numeric keypad
  // Store instructions as count of sequences to reach button, then reach A from last button
  const complexities = codes.map((code) => {
    let current = "A"
    let tally = {}

    code.split("").forEach((char) => {
      const pathToNode = getPathToNode(numericKeypad, current, char)

      if (!tally[pathToNode]) {
        tally[pathToNode] = 0
      }
      tally[pathToNode]++

      current = char
    })

    // Generate sequence to enter into other 2 directional robots
    for (let i = 0; i < 2; i++) {
      const newTally = {}

      for (let key in tally) {
        // Find required sequences for each keypress in previous tally
        const count = tally[key]
        let current = "A"
        key.split("").forEach((char) => {
          const pathToNode = getPathToNode(controller, current, char)

          if (!newTally[pathToNode]) {
            newTally[pathToNode] = 0
          }
          newTally[pathToNode] += count
          current = char
        })
      }

      tally = newTally
    }

    // Calculate path complexity
    const number = Number(code.replace(/^0/, "").replace(/[^\d]/g, ""))
    const pathLength = Object.keys(tally).reduce(
      (total, key) => total + key.length * tally[key],
      0
    )

    return number * pathLength
  })

  // Return sum of code complexities
  return complexities.reduce((total, current) => total + current, 0)
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
