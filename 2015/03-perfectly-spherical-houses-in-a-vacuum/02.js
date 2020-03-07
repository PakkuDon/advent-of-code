const shiftByDirection = {
  '^': { x: 0, y: 1 },
  '>': { x: 1, y: 0 },
  'v': { x: 0, y: -1 },
  '<': { x: -1, y: 0 },
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

const getNumberOfHousesVisitedWithRobotSanta = (directions) => {
  const santaDirections = []
  const robotDirections = []

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i]
    if (i % 2 === 0) {
      santaDirections.push(direction)
    }
    else {
      robotDirections.push(direction)
    }
  }

  const allHousesVisited = getHousesVisited(santaDirections)
    .concat(getHousesVisited(robotDirections))

  const uniqueHouses = allHousesVisited
    .map(coordinate => `${coordinate.x},${coordinate.y}`)
    .reduce((uniqueCoordinates, coordinate) => {
      if (!uniqueCoordinates.includes(coordinate)) {
        uniqueCoordinates.push(coordinate)
      }
      return uniqueCoordinates
    }, [])

  return uniqueHouses.length
}

module.exports = getNumberOfHousesVisitedWithRobotSanta
