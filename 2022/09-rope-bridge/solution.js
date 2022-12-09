const countUniqueCoordinatesVisitedByTail = (moves, knotCount) => {
  const nodes = new Array(knotCount).fill().map((_) => ({ x: 0, y: 0 }))
  const tilesVisited = []

  tilesVisited.push({ ...nodes[nodes.length - 1] })

  moves.forEach((move) => {
    const [direction, units] = move.split(" ")
    let shift

    switch (direction) {
      case "R":
        shift = (position) => ({ ...position, x: position.x + 1 })
        break
      case "U":
        shift = (position) => ({ ...position, y: position.y + 1 })
        break
      case "L":
        shift = (position) => ({ ...position, x: position.x - 1 })
        break
      case "D":
        shift = (position) => ({ ...position, y: position.y - 1 })
        break
    }

    for (let i = 0; i < units; i++) {
      nodes[0] = shift(nodes[0])

      for (let i = 1; i < nodes.length; i++) {
        const current = nodes[i]
        const previous = nodes[i - 1]
        if (!isAdjacent(current, previous)) {
          if (current.x <= previous.x - 1) {
            current.x++
          } else if (current.x >= previous.x + 1) {
            current.x--
          }

          if (current.y <= previous.y - 1) {
            current.y++
          } else if (current.y >= previous.y + 1) {
            current.y--
          }
        }
      }

      tilesVisited.push({ ...nodes[nodes.length - 1] })
    }
  })

  return tilesVisited.reduce(
    (uniqueTiles, current) => uniqueTiles.add(JSON.stringify(current)),
    new Set()
  ).size
}

const isAdjacent = (positionA, positionB) => {
  return (
    Math.abs(positionA.x - positionB.x) <= 1 &&
    Math.abs(positionA.y - positionB.y) <= 1
  )
}

const part1 = (moves) => {
  return countUniqueCoordinatesVisitedByTail(moves, 2)
}

const part2 = (moves) => {
  return countUniqueCoordinatesVisitedByTail(moves, 10)
}

module.exports = {
  part1,
  part2,
}
