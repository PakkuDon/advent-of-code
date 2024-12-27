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

  const intersections = [...new Set(wires[0]).intersection(new Set(wires[1]))]

  return Math.min(
    ...intersections.map((coordinate) =>
      getManhattanDistance(coordinate, "0,0")
    )
  )
}

const part2 = (input) => {
  const origin = { x: 0, y: 0 }
  const wires = input.map((wireInput) => {
    const instructions = wireInput.split(",").map((segment) => ({
      direction: segment[0],
      units: parseInt(segment.substring(1), 10),
    }))

    const coordinates = []
    let current = { ...origin }

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

  const intersections = [...new Set(wires[0]).intersection(new Set(wires[1]))]

  // Find fewest combined steps to reach intersection
  let fewestCombinedSteps = Number.MAX_SAFE_INTEGER
  intersections.forEach((intersection) => {
    // Add 1 to include step from origin
    const stepsForFirst = wires[0].indexOf(intersection) + 1
    const stepsForSecond = wires[1].indexOf(intersection) + 1

    if (stepsForFirst + stepsForSecond < fewestCombinedSteps) {
      fewestCombinedSteps = stepsForFirst + stepsForSecond
    }
  })

  return fewestCombinedSteps
}

module.exports = {
  part1,
  part2,
}
