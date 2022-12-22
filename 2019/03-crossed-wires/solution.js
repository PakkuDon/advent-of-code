const getManhattanDistance = (p1, p2) => {
  const [x1, y1] = p1.split(",").map((value) => parseInt(value, 10))
  const [x2, y2] = p2.split(",").map((value) => parseInt(value, 10))
  return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

const part1 = (input) => {
  const origin = { x: 0, y: 0 }
  const wires = input.map((wireInput) => {
    const instructions = wireInput.split(",").map((segment) => ({
      direction: segment[0],
      units: parseInt(segment.substring(1), 10),
    }))

    const coordinates = []
    let current = { ...origin }
    coordinates.push(`${current.x},${current.y}`)

    instructions.forEach((instruction) => {
      let shift
      switch (instruction.direction) {
        case "R":
          shift = (position) => ({ ...position, x: position.x + 1 })
          break
        case "D":
          shift = (position) => ({ ...position, y: position.y + 1 })
          break
        case "L":
          shift = (position) => ({ ...position, x: position.x - 1 })
          break
        case "U":
          shift = (position) => ({ ...position, y: position.y - 1 })
          break
      }

      for (let i = 0; i < instruction.units; i++) {
        current = shift(current)
        coordinates.push(`${current.x},${current.y}`)
      }
    })

    return coordinates
  })

  const intersections = wires[0].filter((coordinate) => {
    return coordinate !== "0,0" && wires[1].includes(coordinate)
  })

  return Math.min(
    ...intersections.map((coordinate) =>
      getManhattanDistance(coordinate, "0,0")
    )
  )
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
