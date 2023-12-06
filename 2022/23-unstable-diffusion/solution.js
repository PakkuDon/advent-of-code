const part1 = (input) => {
  const elves = []
  const map = {}

  // Get initial elf locations
  input.split("\n").forEach((row, index) => {
    for (let x = 0; x < row.length; x++) {
      if (row[x] === "#") {
        const elf = { x, y: index, nextMove: "" }

        elves.push(elf)
        map[`${x},${index}`] = elf
      }
    }
  })

  // Process rounds
  const numberOfRounds = 10
  const movesByPreference = [
    {
      side: "north",
      getNextPosition: ({ x, y }) => `${x},${y - 1}`,
    },
    {
      side: "south",
      getNextPosition: ({ x, y }) => `${x},${y + 1}`,
    },
    {
      side: "west",
      getNextPosition: ({ x, y }) => `${x - 1},${y}`,
    },
    {
      side: "east",
      getNextPosition: ({ x, y }) => `${x + 1},${y}`,
    },
  ]
  for (let i = 0; i < numberOfRounds; i++) {
    const nextMoves = {}
    // First determine move for each elf
    elves.forEach((elf) => {
      const { x, y } = elf
      let nextPosition
      const north = [
        map[`${x - 1},${y - 1}`],
        map[`${x},${y - 1}`],
        map[`${x + 1},${y - 1}`],
      ]
      const west = [
        map[`${x - 1},${y - 1}`],
        map[`${x - 1},${y}`],
        map[`${x - 1},${y + 1}`],
      ]
      const south = [
        map[`${x - 1},${y + 1}`],
        map[`${x},${y + 1}`],
        map[`${x + 1},${y + 1}`],
      ]
      const east = [
        map[`${x + 1},${y - 1}`],
        map[`${x + 1},${y}`],
        map[`${x + 1},${y + 1}`],
      ]

      // If there are no adjacent elves do nothing
      // Otherwise set new position for elf
      if (
        [...north, ...east, ...south, ...west].filter((cell) => cell).length > 0
      ) {
        const neighbours = {
          north,
          east,
          west,
          south,
        }
        for (let j = 0; j < movesByPreference.length; j++) {
          const moveToConsider =
            movesByPreference[(j + i) % movesByPreference.length]
          const neighboursInDirection = neighbours[moveToConsider.side].filter(
            (cell) => cell
          )
          if (neighboursInDirection.length === 0) {
            nextPosition = moveToConsider.getNextPosition(elf)
            break
          }
        }

        if (nextPosition) {
          if (!nextMoves[nextPosition]) {
            nextMoves[nextPosition] = []
          }
          nextMoves[nextPosition].push(elf)
          elf.nextMove = nextPosition
        }
      }
    })

    // Move elves if new move is valid
    elves.forEach((elf) => {
      if (elf.nextMove) {
        if ((nextMoves[elf.nextMove] || []).length === 1) {
          const [newX, newY] = elf.nextMove
            .split(",")
            .map((coord) => parseInt(coord, 10))
          map[`${elf.x},${elf.y}`] = null
          map[`${newX},${newY}`] = elf
          elf.x = newX
          elf.y = newY
        }
      }

      elf.nextMove = ""
    })
  }

  // Get range of tiles covered
  const xCoords = Object.keys(map).map((point) =>
    parseInt(point.split(",")[0], 10)
  )
  const yCoords = Object.keys(map).map((point) =>
    parseInt(point.split(",")[1], 10)
  )
  const minX = Math.min(...xCoords)
  const maxX = Math.max(...xCoords)
  const minY = Math.min(...yCoords)
  const maxY = Math.max(...yCoords)

  return (
    (Math.abs(maxX) + Math.abs(minX) + 1) *
      (Math.abs(maxY) + Math.abs(minY) + 1) -
    elves.length
  )
}

const part2 = (input) => {
  const elves = []
  const map = {}

  // Get initial elf locations
  input.split("\n").forEach((row, index) => {
    for (let x = 0; x < row.length; x++) {
      if (row[x] === "#") {
        const elf = { x, y: index, nextMove: "" }

        elves.push(elf)
        map[`${x},${index}`] = elf
      }
    }
  })

  // Process rounds until no elves have any next moves recorded
  const movesByPreference = [
    {
      side: "north",
      getNextPosition: ({ x, y }) => `${x},${y - 1}`,
    },
    {
      side: "south",
      getNextPosition: ({ x, y }) => `${x},${y + 1}`,
    },
    {
      side: "west",
      getNextPosition: ({ x, y }) => `${x - 1},${y}`,
    },
    {
      side: "east",
      getNextPosition: ({ x, y }) => `${x + 1},${y}`,
    },
  ]

  let roundNo = 0
  while (true) {
    const nextMoves = {}
    // First determine move for each elf
    elves.forEach((elf) => {
      const { x, y } = elf
      let nextPosition
      const north = [
        map[`${x - 1},${y - 1}`],
        map[`${x},${y - 1}`],
        map[`${x + 1},${y - 1}`],
      ]
      const west = [
        map[`${x - 1},${y - 1}`],
        map[`${x - 1},${y}`],
        map[`${x - 1},${y + 1}`],
      ]
      const south = [
        map[`${x - 1},${y + 1}`],
        map[`${x},${y + 1}`],
        map[`${x + 1},${y + 1}`],
      ]
      const east = [
        map[`${x + 1},${y - 1}`],
        map[`${x + 1},${y}`],
        map[`${x + 1},${y + 1}`],
      ]

      // If there are no adjacent elves do nothing
      // Otherwise set new position for elf
      if (
        [...north, ...east, ...south, ...west].filter((cell) => cell).length > 0
      ) {
        const neighbours = {
          north,
          east,
          west,
          south,
        }
        for (let i = 0; i < movesByPreference.length; i++) {
          const moveToConsider =
            movesByPreference[(i + roundNo) % movesByPreference.length]
          const neighboursInDirection = neighbours[moveToConsider.side].filter(
            (cell) => cell
          )
          if (neighboursInDirection.length === 0) {
            nextPosition = moveToConsider.getNextPosition(elf)
            break
          }
        }

        if (nextPosition) {
          if (!nextMoves[nextPosition]) {
            nextMoves[nextPosition] = []
          }
          nextMoves[nextPosition].push(elf)
          elf.nextMove = nextPosition
        }
      }
    })

    roundNo++
    if (elves.every((elf) => elf.nextMove === "")) {
      return roundNo
    }

    // Move elves if new move is valid
    elves.forEach((elf) => {
      if (elf.nextMove) {
        if ((nextMoves[elf.nextMove] || []).length === 1) {
          const [newX, newY] = elf.nextMove
            .split(",")
            .map((coord) => parseInt(coord, 10))
          map[`${elf.x},${elf.y}`] = null
          map[`${newX},${newY}`] = elf
          elf.x = newX
          elf.y = newY
        }
      }

      elf.nextMove = ""
    })
  }
}

module.exports = {
  part1,
  part2,
}
