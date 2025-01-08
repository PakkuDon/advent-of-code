const processInstructions = (instructions, screen) => {
  instructions.forEach((instruction) => {
    // rect - turn on x*y pixels in top-left of screen
    if (instruction.startsWith("rect")) {
      const [width, height] = instruction
        .match(/\d+/g)
        .map((value) => Number(value))
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          screen[y][x] = "#"
        }
      }
    }
    // rotate row - shift pixels in row to right by specified amount
    else if (instruction.startsWith("rotate row")) {
      const [row, shift] = instruction
        .match(/\d+/g)
        .map((value) => Number(value))
      for (let i = 0; i < shift; i++) {
        screen[row] = [
          screen[row][screen[row].length - 1],
          ...screen[row].slice(0, screen[row].length - 1),
        ]
      }
    }
    // rotate column - shift pixels in column down by specified amount
    else if (instruction.startsWith("rotate column")) {
      const [column, shift] = instruction
        .match(/\d+/g)
        .map((value) => Number(value))

      for (let i = 0; i < shift; i++) {
        const cells = screen.map((row) => row[column])
        const newCells = [
          cells[cells.length - 1],
          ...cells.slice(0, cells.length - 1),
        ]

        for (let j = 0; j < newCells.length; j++) {
          screen[j][column] = newCells[j]
        }
      }
    }
  })
}

const part1 = (input) => {
  const instructions = input.trim().split("\n")
  const screen = Array(6)
    .fill()
    .map(() => Array(50).fill("."))

  processInstructions(instructions, screen)

  // Count lit pixels
  let count = 0

  for (let y = 0; y < screen.length; y++) {
    count += screen[y].filter((pixel) => pixel === "#").length
  }

  return count
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
