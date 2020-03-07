const shiftByDirection = {
  '^': { x: 0, y: 1 },
  '>': { x: 1, y: 0 },
  'v': { x: 0, y: -1 },
  '<': { x: -1, y: 0 },
}

const getNumberOfHousesVisited = (directions) => {
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

  const uniqueHouses = path
    .map(coordinate => `${coordinate.x},${coordinate.y}`)
    .reduce((uniqueCoordinates, coordinate) => {
      if (!uniqueCoordinates.includes(coordinate)) {
        uniqueCoordinates.push(coordinate)
      }
      return uniqueCoordinates
    }, [])

  return uniqueHouses.length
}

module.exports = getNumberOfHousesVisited
