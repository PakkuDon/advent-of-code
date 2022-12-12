const part1 = (input) => {
  const map = []
  let start
  let end

  // Create cells from height map
  const rows = input.trim().split("\n")
  rows.forEach((row, y) => {
    const parsedRow = []
    const cells = row.split("")
    cells.forEach((cell, x) => {
      let height
      if (cell === "S") {
        start = { x, y }
        height = "a".charCodeAt(0) - "a".charCodeAt(0)
      } else if (cell === "E") {
        end = { x, y }
        height = "z".charCodeAt(0) - "a".charCodeAt(0)
      } else {
        height = cell.charCodeAt(0) - "a".charCodeAt(0)
      }

      parsedRow.push({
        x,
        y,
        height,
        neighbours: [],
        visited: false,
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

  // Count steps to end using breadth-first search
  let queue = []
  let current = map[start.y][start.x]
  queue.push([current, 0])

  while (!(current.x === end.x && current.y === end.y)) {
    const [current, cost] = queue.shift()
    if (current.x === end.x && current.y === end.y) {
      return cost
    }

    if (!current.visited) {
      current.visited = true
      let unvisitedNeighbours = current.neighbours.filter(
        (cell) => !cell.visited
      )
      unvisitedNeighbours.forEach((neighbour) => {
        queue.push([neighbour, cost + 1])
      })
    }
  }
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
