const shiftByDirection = {
  "^": { x: 0, y: 1 },
  ">": { x: 1, y: 0 },
  v: { x: 0, y: -1 },
  "<": { x: -1, y: 0 },
}

const getHousesVisited = (directions) => {
  let x = 0
  let y = 0
  const path = []

  path.push({ x, y })

  for (let direction of directions) {
    const shift = shiftByDirection[direction]
    x += shift.x
    y += shift.y

    path.push({ x, y })
  }

  return path
}

const part1 = (input) => {
  let x = 0
  let y = 0
  const path = []
  const directions = input.split("")

  path.push({ x, y })

  for (let direction of directions) {
    const shift = shiftByDirection[direction]
    x += shift.x
    y += shift.y

    path.push({ x, y })
  }

  const uniqueHouses = path
    .map((coordinate) => `${coordinate.x},${coordinate.y}`)
    .reduce((uniqueCoordinates, coordinate) => {
      if (!uniqueCoordinates.includes(coordinate)) {
        uniqueCoordinates.push(coordinate)
      }
      return uniqueCoordinates
    }, [])

  return uniqueHouses.length
}

const part2 = (input) => {
  const santaDirections = []
  const robotDirections = []
  const directions = input.split("")

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i]
    if (i % 2 === 0) {
      santaDirections.push(direction)
    } else {
      robotDirections.push(direction)
    }
  }

  const allHousesVisited = getHousesVisited(santaDirections).concat(
    getHousesVisited(robotDirections)
  )

  const uniqueHouses = allHousesVisited
    .map((coordinate) => `${coordinate.x},${coordinate.y}`)
    .reduce((uniqueCoordinates, coordinate) => {
      if (!uniqueCoordinates.includes(coordinate)) {
        uniqueCoordinates.push(coordinate)
      }
      return uniqueCoordinates
    }, [])

  return uniqueHouses.length
}

module.exports = {
  part1,
  part2,
}
