const part1 = (input) => {
  let currentDirection = "N"
  const directions = ["N", "E", "S", "W"]
  let position = { x: 0, y: 0 }

  const moves = input.split(", ")
  moves.forEach((move) => {
    let direction = move.charAt(0)
    units = parseInt(move.substring(1), 10)
    const index = directions.indexOf(currentDirection)

    if (direction === "R") {
      currentDirection = directions[(index + 1) % 4]
    } else {
      currentDirection = directions.slice(index - 1)[0]
    }

    switch (currentDirection) {
      case "E":
        position.x += units
        break
      case "N":
        position.y += units
        break
      case "W":
        position.x -= units
        break
      case "S":
        position.y -= units
        break
    }
  })

  return Math.abs(position.x) + Math.abs(position.y)
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
