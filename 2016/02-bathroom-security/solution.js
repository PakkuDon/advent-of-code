const part1 = (input) => {
  const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  let current = { x: 1, y: 1 }
  const rows = input.trim().split("\n")
  code = ""

  rows.forEach((row) => {
    row.split("").forEach((instruction) => {
      switch (instruction) {
        case "U":
          if (current.y > 0) {
            current.y--
          }
          break
        case "D":
          if (current.y < 2) {
            current.y++
          }
          break
        case "L":
          if (current.x > 0) {
            current.x--
          }
          break
        case "R":
          if (current.x < 2) {
            current.x++
          }
          break
        default:
          console.error(`Unexpected instruction ${instruction} received`)
      }
    })

    code += grid[current.y][current.x]
  })

  return code
}

const part2 = (input) => {
  const grid = [
    ["", "", 1, "", ""],
    ["", 2, 3, 4, ""],
    [5, 6, 7, 8, 9],
    ["", "A", "B", "C", ""],
    ["", "", "D", "", ""],
  ]
  let current = { x: 0, y: 2 }
  const rows = input.trim().split("\n")
  code = ""

  rows.forEach((row) => {
    row.split("").forEach((instruction) => {
      switch (instruction) {
        case "U":
          if (grid[current.y - 1] && grid[current.y - 1][current.x]) {
            current.y--
          }
          break
        case "D":
          if (grid[current.y + 1] && grid[current.y + 1][current.x]) {
            current.y++
          }
          break
        case "L":
          if (grid[current.y][current.x - 1]) {
            current.x--
          }
          break
        case "R":
          if (grid[current.y][current.x + 1]) {
            current.x++
          }
          break
        default:
          console.error(`Unexpected instruction ${instruction} received`)
      }
    })

    code += grid[current.y][current.x]
  })

  return code
}

module.exports = {
  part1,
  part2,
}
