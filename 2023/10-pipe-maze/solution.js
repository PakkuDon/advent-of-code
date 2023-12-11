const linkCells = (a, b) => {
  a.neighbours.push(b)
}

const part1 = (input) => {
  const grid = []
  let startingPoint
  // Parse maze
  const rows = input.trim().split("\n")
  for (let y = 0; y < rows.length; y++) {
    const row = rows[y]
    const cells = []

    for (let x = 0; x < row.length; x++) {
      let char = row[x]
      const cell = { x, y, type: char, neighbours: [] }
      if (char === "S") {
        startingPoint = cell
      }
      cells.push(cell)
    }
    grid.push(cells)
  }

  // Build edges
  for (let y = 0; y < rows.length; y++) {
    const row = rows[y]

    for (let x = 0; x < row.length; x++) {
      const cell = grid[y][x]

      if (cell.type === "|") {
        // Connect vertical pipe neighbours if adjacent cells valid
        if (y > 0) {
          const aboveCell = grid[y - 1][x]
          if (["|", "7", "F"].includes(aboveCell.type)) {
            linkCells(cell, aboveCell)
          }
        }
        if (y < rows.length - 1) {
          const belowCell = grid[y + 1][x]
          if (["|", "J", "L"].includes(belowCell.type)) {
            linkCells(cell, belowCell)
          }
        }
      } else if (cell.type === "-") {
        // Connect horizontal pipe neighbours if adjacent cells valid
        if (x > 0) {
          const leftCell = grid[y][x - 1]
          if (["-", "L", "F"].includes(leftCell.type)) {
            linkCells(cell, leftCell)
          }
        }
        if (x < row.length - 1) {
          const rightCell = grid[y][x + 1]
          if (["-", "J", "7"].includes(rightCell.type)) {
            linkCells(cell, rightCell)
          }
        }
      } else if (cell.type === "L") {
        // Connect north-east pipe if adjacent cells valid
        if (x < row.length - 1) {
          const rightCell = grid[y][x + 1]
          if (["-", "J", "7"].includes(rightCell.type)) {
            linkCells(cell, rightCell)
          }
        }
        if (y > 0) {
          const aboveCell = grid[y - 1][x]
          if (["|", "7", "F"].includes(aboveCell.type)) {
            linkCells(cell, aboveCell)
          }
        }
      } else if (cell.type === "J") {
        if (y > 0) {
          const aboveCell = grid[y - 1][x]
          if (["|", "7", "F"].includes(aboveCell.type)) {
            linkCells(cell, aboveCell)
          }
        }
        if (x > 0) {
          const leftCell = grid[y][x - 1]
          if (["-", "L", "F"].includes(leftCell.type)) {
            linkCells(cell, leftCell)
          }
        }
      } else if (cell.type === "7") {
        if (y < rows.length - 1) {
          const belowCell = grid[y + 1][x]
          if (["|", "J", "L"].includes(belowCell.type)) {
            linkCells(cell, belowCell)
          }
        }
        if (x > 0) {
          const leftCell = grid[y][x - 1]
          if (["-", "L", "F"].includes(leftCell.type)) {
            linkCells(cell, leftCell)
          }
        }
      } else if (cell.type === "F") {
        if (y < rows.length - 1) {
          const belowCell = grid[y + 1][x]
          if (["|", "J", "L"].includes(belowCell.type)) {
            linkCells(cell, belowCell)
          }
        }
        if (x < row.length - 1) {
          const rightCell = grid[y][x + 1]
          if (["-", "J", "7"].includes(rightCell.type)) {
            linkCells(cell, rightCell)
          }
        }
      } else if (cell.type === "S") {
        // Infer cell neighbours by neighbouring cells
        if (y < rows.length - 1) {
          const belowCell = grid[y + 1][x]
          if (["|", "J", "L"].includes(belowCell.type)) {
            linkCells(cell, belowCell)
            linkCells(belowCell, cell)
          }
        }
        if (x < row.length - 1) {
          const rightCell = grid[y][x + 1]
          if (["-", "J", "7"].includes(rightCell.type)) {
            linkCells(cell, rightCell)
            linkCells(rightCell, cell)
          }
        }
        if (x > 0) {
          const leftCell = grid[y][x - 1]
          if (["-", "L", "F"].includes(leftCell.type)) {
            linkCells(cell, leftCell)
            linkCells(leftCell, cell)
          }
        }
        if (y > 0) {
          const aboveCell = grid[y - 1][x]
          if (["|", "7", "F"].includes(aboveCell.type)) {
            linkCells(cell, aboveCell)
            linkCells(aboveCell, cell)
          }
        }
      }
    }
  }

  // Generate path to loop
  const stack = []
  const visited = {}
  let current = startingPoint
  stack.push(current)

  while (stack.length > 0) {
    visited[`${current.x},${current.y}`] = true
    const unvisitedNeighbours = current.neighbours.filter(
      ({ x, y }) => !visited[`${x},${y}`]
    )
    unvisitedNeighbours.forEach((cell) => {
      stack.push(cell)
    })
    current = stack.pop()
  }

  // Return highest cost from starting point
  // Midway point will be furthest away either way around the loop
  return Object.keys(visited).length / 2
}

const part2 = (input) => {
  const grid = []
  let startingPoint
  // Parse maze
  const rows = input.trim().split("\n")
  for (let y = 0; y < rows.length; y++) {
    const row = rows[y]
    const cells = []

    for (let x = 0; x < row.length; x++) {
      let char = row[x]
      const cell = { x, y, type: char, neighbours: [] }
      if (char === "S") {
        startingPoint = cell
      }
      cells.push(cell)
    }
    grid.push(cells)
  }

  // Build edges
  for (let y = 0; y < rows.length; y++) {
    const row = rows[y]

    for (let x = 0; x < row.length; x++) {
      const cell = grid[y][x]

      if (cell.type === "|") {
        // Connect vertical pipe neighbours if adjacent cells valid
        if (y > 0) {
          const aboveCell = grid[y - 1][x]
          if (["|", "7", "F"].includes(aboveCell.type)) {
            linkCells(cell, aboveCell)
          }
        }
        if (y < rows.length - 1) {
          const belowCell = grid[y + 1][x]
          if (["|", "J", "L"].includes(belowCell.type)) {
            linkCells(cell, belowCell)
          }
        }
      } else if (cell.type === "-") {
        // Connect horizontal pipe neighbours if adjacent cells valid
        if (x > 0) {
          const leftCell = grid[y][x - 1]
          if (["-", "L", "F"].includes(leftCell.type)) {
            linkCells(cell, leftCell)
          }
        }
        if (x < row.length - 1) {
          const rightCell = grid[y][x + 1]
          if (["-", "J", "7"].includes(rightCell.type)) {
            linkCells(cell, rightCell)
          }
        }
      } else if (cell.type === "L") {
        // Connect north-east pipe if adjacent cells valid
        if (x < row.length - 1) {
          const rightCell = grid[y][x + 1]
          if (["-", "J", "7"].includes(rightCell.type)) {
            linkCells(cell, rightCell)
          }
        }
        if (y > 0) {
          const aboveCell = grid[y - 1][x]
          if (["|", "7", "F"].includes(aboveCell.type)) {
            linkCells(cell, aboveCell)
          }
        }
      } else if (cell.type === "J") {
        if (y > 0) {
          const aboveCell = grid[y - 1][x]
          if (["|", "7", "F"].includes(aboveCell.type)) {
            linkCells(cell, aboveCell)
          }
        }
        if (x > 0) {
          const leftCell = grid[y][x - 1]
          if (["-", "L", "F"].includes(leftCell.type)) {
            linkCells(cell, leftCell)
          }
        }
      } else if (cell.type === "7") {
        if (y < rows.length - 1) {
          const belowCell = grid[y + 1][x]
          if (["|", "J", "L"].includes(belowCell.type)) {
            linkCells(cell, belowCell)
          }
        }
        if (x > 0) {
          const leftCell = grid[y][x - 1]
          if (["-", "L", "F"].includes(leftCell.type)) {
            linkCells(cell, leftCell)
          }
        }
      } else if (cell.type === "F") {
        if (y < rows.length - 1) {
          const belowCell = grid[y + 1][x]
          if (["|", "J", "L"].includes(belowCell.type)) {
            linkCells(cell, belowCell)
          }
        }
        if (x < row.length - 1) {
          const rightCell = grid[y][x + 1]
          if (["-", "J", "7"].includes(rightCell.type)) {
            linkCells(cell, rightCell)
          }
        }
      } else if (cell.type === "S") {
        // Infer cell neighbours by neighbouring cells
        let connectLeft, connectRight, connectUp, connectDown
        if (y < rows.length - 1) {
          const belowCell = grid[y + 1][x]
          if (["|", "J", "L"].includes(belowCell.type)) {
            linkCells(cell, belowCell)
            linkCells(belowCell, cell)
            connectDown = true
          }
        }
        if (x < row.length - 1) {
          const rightCell = grid[y][x + 1]
          if (["-", "J", "7"].includes(rightCell.type)) {
            linkCells(cell, rightCell)
            linkCells(rightCell, cell)
            connectRight = true
          }
        }
        if (x > 0) {
          const leftCell = grid[y][x - 1]
          if (["-", "L", "F"].includes(leftCell.type)) {
            linkCells(cell, leftCell)
            linkCells(leftCell, cell)
            connectLeft = true
          }
        }
        if (y > 0) {
          const aboveCell = grid[y - 1][x]
          if (["|", "7", "F"].includes(aboveCell.type)) {
            linkCells(cell, aboveCell)
            linkCells(aboveCell, cell)
            connectUp = true
          }
        }

        // Infer cell type from neighbouring cells
        if (connectUp && connectDown) {
          cell.type = "|"
        } else if (connectLeft && connectRight) {
          cell.type = "-"
        } else if (connectLeft && connectUp) {
          cell.type = "L"
        } else if (connectLeft && connectDown) {
          cell.type = "F"
        } else if (connectRight && connectUp) {
          cell.type = "J"
        } else if (connectRight && connectDown) {
          cell.type = "7"
        }
      }
    }
  }

  // Generate path to loop
  const stack = []
  const visited = []
  for (let y = 0; y <= grid.length; y++) {
    const row = []
    for (let x = 0; x <= grid[0].length; x++) {
      row.push(false)
    }
    visited.push(row)
  }
  let current = startingPoint
  stack.push(current)

  while (stack.length > 0) {
    visited[current.y][current.x] = true
    const unvisitedNeighbours = current.neighbours.filter(
      ({ x, y }) => !visited[y][x]
    )
    unvisitedNeighbours.forEach((cell) => {
      stack.push(cell)
    })
    current = stack.pop()
  }

  // Generate string representation of visited path
  let str = ""
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (visited[y][x]) {
        str += grid[y][x].type
      } else {
        str += "."
      }
    }
    str += "\n"
  }

  // Omit horizontal sequences of pipes
  str = str.replace(/(F-*7)|(L-*J)/g, "")
  // Replace bends with walls so they are counted once in parity check
  str = str.replace(/(F-*J)|(L-*7)/g, "|")

  // Count number of ground tiles in polygon
  // Tiles are counted if they are inside polygon using
  // https://en.wikipedia.org/wiki/Point_in_polygon#Ray_casting_algorithm
  let count = 0
  str.split("\n").forEach((row) => {
    let inPolygon = false
    for (let x = 0; x < row.length; x++) {
      if (row[x] === "|") {
        inPolygon = !inPolygon
      } else if (inPolygon) {
        count++
      }
    }
  })

  return count
}

module.exports = {
  part1,
  part2,
}
