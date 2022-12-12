const constructMap = (input) => {
  const map = []

  // Create cells from height map
  const rows = input.trim().split("\n")
  rows.forEach((row, y) => {
    const parsedRow = []
    const cells = row.split("")
    cells.forEach((cell, x) => {
      let height
      if (cell === "S") {
        height = "a".charCodeAt(0) - "a".charCodeAt(0)
      } else if (cell === "E") {
        height = "z".charCodeAt(0) - "a".charCodeAt(0)
      } else {
        height = cell.charCodeAt(0) - "a".charCodeAt(0)
      }

      parsedRow.push({
        x,
        y,
        height,
        neighbours: [],
      })
    })

    map.push(parsedRow)
  })

  const height = map.length
  const width = map[0].length

  // Set accessible neighbours
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const cell = map[y][x]

      if (x > 0 && map[y][x - 1].height - cell.height <= 1) {
        cell.neighbours.push(map[y][x - 1])
      }
      if (x + 1 < width && map[y][x + 1].height - cell.height <= 1) {
        cell.neighbours.push(map[y][x + 1])
      }
      if (y > 0 && map[y - 1][x].height - cell.height <= 1) {
        cell.neighbours.push(map[y - 1][x])
      }
      if (y + 1 < height && map[y + 1][x].height - cell.height <= 1) {
        cell.neighbours.push(map[y + 1][x])
      }
    }
  }

  return map
}

const getShortestPathLength = (map, origin, destination) => {
  const visited = []
  map.forEach((row) => {
    visited.push(new Array(row.length).fill().map(() => false))
  })
  let queue = []
  let current = map[origin.y][origin.x]
  queue.push({ node: current, cost: 0 })

  while (queue.length) {
    const { node: current, cost } = queue.shift()
    if (current.x === destination.x && current.y === destination.y) {
      return cost
    }

    if (!visited[current.y][current.x]) {
      visited[current.y][current.x] = true
      let unvisitedNeighbours = current.neighbours.filter(
        (cell) => !visited[cell.y][cell.x]
      )
      unvisitedNeighbours.forEach((neighbour) => {
        queue.push({ node: neighbour, cost: cost + 1 })
      })
    }
  }

  return Number.MAX_SAFE_INTEGER
}

const part1 = (input) => {
  const matrix = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))
  const map = constructMap(input)
  let start
  let end
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === "S") {
        start = { x, y }
      } else if (matrix[y][x] === "E") {
        end = { x, y }
      }
    }

    if (start && end) {
      break
    }
  }

  return getShortestPathLength(map, start, end)
}

const part2 = (input) => {
  const matrix = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))
  const map = constructMap(input)
  let origins = []
  let destination
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === "S" || matrix[y][x] === "a") {
        origins.push({ x, y })
      } else if (matrix[y][x] === "E") {
        destination = { x, y }
      }
    }
  }

  return origins
    .map((origin) => getShortestPathLength(map, origin, destination))
    .sort((a, b) => (a > b ? 1 : -1))[0]
}

module.exports = {
  part1,
  part2,
}
