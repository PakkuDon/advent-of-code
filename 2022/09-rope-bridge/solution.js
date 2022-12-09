const isAdjacent = (positionA, positionB) => {
  return (
    Math.abs(positionA.x - positionB.x) <= 1 &&
    Math.abs(positionA.y - positionB.y) <= 1
  )
}

const part1 = (moves) => {
  let head = { x: 0, y: 0 }
  let tail = { x: 0, y: 0 }
  const tilesVisited = []

  tilesVisited.push({ ...tail })

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
      const newPosition = shift(head)
      if (!isAdjacent(tail, newPosition)) {
        tail = head
      }
      head = newPosition
      tilesVisited.push({ ...tail })
    }
  })

  return tilesVisited.reduce(
    (uniqueTiles, current) => uniqueTiles.add(JSON.stringify(current)),
    new Set()
  ).size
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
