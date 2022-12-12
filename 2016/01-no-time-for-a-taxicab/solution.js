const generatePath = (moves) => {
  let currentDirection = "N"
  let position = { x: 0, y: 0 }
  const directions = ["N", "E", "S", "W"]
  const path = []

  moves.forEach((move) => {
    let direction = move.charAt(0)
    units = parseInt(move.substring(1), 10)
    const index = directions.indexOf(currentDirection)

    if (direction === "R") {
      currentDirection = directions[(index + 1) % 4]
    } else {
      currentDirection = directions.slice(index - 1)[0]
    }

    let shift
    switch (currentDirection) {
      case "E":
        shift = (position) => position.x++
        break
      case "N":
        shift = (position) => position.y++
        break
      case "W":
        shift = (position) => position.x--
        break
      case "S":
        shift = (position) => position.y--
        break
    }

    for (let i = 0; i < units; i++) {
      shift(position)
      path.push({ ...position })
    }
  })

  return path
}

const part1 = (input) => {
  const path = generatePath(input.split(", "))
  const position = path[path.length - 1]

  return Math.abs(position.x) + Math.abs(position.y)
}

const part2 = (input) => {
  const path = generatePath(input.split(", "))
  const set = new Set()

  for (let i = 0; i < path.length; i++) {
    const position = path[i]
    const currentSetSize = set.size
    set.add(JSON.stringify(position))

    if (set.size === currentSetSize) {
      return Math.abs(position.x) + Math.abs(position.y)
    }
  }
}

module.exports = {
  part1,
  part2,
}
