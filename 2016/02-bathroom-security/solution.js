const getSecurityCode = (input, keypad, startingPosition) => {
  let current = { ...startingPosition }
  const rows = input.trim().split("\n")
  code = ""

  rows.forEach((row) => {
    row.split("").forEach((instruction) => {
      switch (instruction) {
        case "U":
          if (keypad[current.y - 1] && keypad[current.y - 1][current.x]) {
            current.y--
          }
          break
        case "D":
          if (keypad[current.y + 1] && keypad[current.y + 1][current.x]) {
            current.y++
          }
          break
        case "L":
          if (keypad[current.y][current.x - 1]) {
            current.x--
          }
          break
        case "R":
          if (keypad[current.y][current.x + 1]) {
            current.x++
          }
          break
        default:
          console.error(`Unexpected instruction ${instruction} received`)
      }
    })

    code += keypad[current.y][current.x]
  })

  return code
}

const part1 = (input) => {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const startingPosition = { x: 1, y: 1 }
  return getSecurityCode(input, keypad, startingPosition)
}

const part2 = (input) => {
  const keypad = [
    ["", "", 1, "", ""],
    ["", 2, 3, 4, ""],
    [5, 6, 7, 8, 9],
    ["", "A", "B", "C", ""],
    ["", "", "D", "", ""],
  ]
  const startingPosition = { x: 0, y: 2 }
  return getSecurityCode(input, keypad, startingPosition)
}

module.exports = {
  part1,
  part2,
}
