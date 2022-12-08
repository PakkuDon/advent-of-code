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
      const surroundingTrees = [[], [], [], []]
      for (let x = 0; x < i; x++) {
        surroundingTrees[0].push(matrix[x][j])
      }
      for (let x = i + 1; x < matrix.length; x++) {
        surroundingTrees[1].push(matrix[x][j])
      }
      for (let y = 0; y < j; y++) {
        surroundingTrees[2].push(matrix[i][y])
      }
      for (let y = j + 1; y < matrix[i].length; y++) {
        surroundingTrees[3].push(matrix[i][y])
      }

      if (surroundingTrees.some((trees) => Math.max(...trees) < matrix[i][j])) {
        visibleTrees++
      }
    }
  }

  return visibleTrees
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}