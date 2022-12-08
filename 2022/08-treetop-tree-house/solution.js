const getTreesToEdge = (grid, x, y) => {
  const treesFromEdge = [[], [], [], []]
  for (let x1 = x - 1; x1 >= 0; x1--) {
    treesFromEdge[0].push(grid[x1][y])
  }
  for (let x1 = x + 1; x1 < grid.length; x1++) {
    treesFromEdge[1].push(grid[x1][y])
  }
  for (let y1 = y - 1; y1 >= 0; y1--) {
    treesFromEdge[2].push(grid[x][y1])
  }
  for (let y1 = y + 1; y1 < grid[x].length; y1++) {
    treesFromEdge[3].push(grid[x][y1])
  }
  return treesFromEdge
}

const part1 = (input) => {
  input = input.trim()
  let visibleTrees = 0
  const matrix = []

  const rows = input.split("\n")
  for (let i = 0; i < rows.length; i++) {
    matrix[i] = rows[i].split("").map((value) => parseInt(value, 10))
  }

  visibleTrees = matrix.length * 2 + (matrix[0].length - 2) * 2

  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[0].length - 1; j++) {
      const treesToEdge = getTreesToEdge(matrix, i, j)

      if (treesToEdge.some((trees) => Math.max(...trees) < matrix[i][j])) {
        visibleTrees++
      }
    }
  }

  return visibleTrees
}

const part2 = (input) => {
  input = input.trim()
  let maxScenicScore = 0
  const matrix = []

  const rows = input.split("\n")
  for (let i = 0; i < rows.length; i++) {
    matrix[i] = rows[i].split("").map((value) => parseInt(value, 10))
  }

  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[0].length - 1; j++) {
      const currentTreeHeight = matrix[i][j]
      const treesToEdge = getTreesToEdge(matrix, i, j)
      const treesVisible = treesToEdge.map((treeHeights) => {
        let indexOfTreeBlockingView = treeHeights.findIndex(
          (height) => height >= currentTreeHeight
        )
        // No trees blocking view
        if (indexOfTreeBlockingView === -1) {
          return treeHeights.length
        }
        return indexOfTreeBlockingView + 1
      })

      const scenicScore = treesVisible.reduce(
        (total, current) => total * current
      )
      if (scenicScore > maxScenicScore) {
        maxScenicScore = scenicScore
      }
    }
  }

  return maxScenicScore
}

module.exports = {
  part1,
  part2,
}
