const GRID_LENGTH = 1000

const parseInstruction = (instruction) => {
  let [_input, type, x1, y1, x2, y2] = instruction.match(
    /([A-Za-z ]+) (\d+),(\d+) through (\d+),(\d+)/
  )
  return {
    type,
    x1: parseInt(x1, 10),
    y1: parseInt(y1, 10),
    x2: parseInt(x2, 10),
    y2: parseInt(y2, 10),
  }
}

const processInstructions = (grid, instructions) => {
  instructions.forEach((instruction) => {
    const { type, x1, y1, x2, y2 } = parseInstruction(instruction)
    let action

    switch (type) {
      case "toggle":
        action = (isLit) => !isLit
        break
      case "turn on":
        action = () => true
        break
      case "turn off":
        action = () => false
        break
      default:
        throw new Error(`Invalid action type. Received ${type}`)
    }

    for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
        grid[x][y] = action(grid[x][y])
      }
    }
  })
}

const getNumberOfLightsSwitchedOn = (instructions) => {
  let numberOfLightsOn = 0
  const grid = new Array(GRID_LENGTH)
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(GRID_LENGTH)
    grid[i].fill(false)
  }

  processInstructions(grid, instructions)

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[x][y]) {
        numberOfLightsOn++
      }
    }
  }

  return numberOfLightsOn
}

module.exports = getNumberOfLightsSwitchedOn
