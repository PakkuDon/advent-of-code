const part1 = (input) => {
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))
  const startPosition = { x: grid[0].indexOf("S"), y: 0 }
  let beams = [startPosition]

  let splitCount = 0

  // Trace beam path
  for (let i = 0; i < grid.length; i++) {
    // Use set to eliminate duplicate beams
    const newBeams = new Set()
    for (let j = 0; j < beams.length; j++) {
      const beam = beams[j]

      // Split beam if splitter found
      if (grid[beam.y + 1] && grid[beam.y + 1][beam.x] === "^") {
        splitCount++
        newBeams.add(JSON.stringify({ x: beam.x - 1, y: beam.y + 1 }))
        newBeams.add(JSON.stringify({ x: beam.x + 1, y: beam.y + 1 }))
      }
      // Else move current beam down
      else {
        newBeams.add(JSON.stringify({ x: beam.x, y: beam.y + 1 }))
      }
    }

    beams = [...newBeams].map((beam) => JSON.parse(beam))
  }

  return splitCount
}

const part2 = (input) => {
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.split(""))
  const startPosition = { x: grid[0].indexOf("S"), y: 0 }
  let beams = [startPosition]

  // Track number of visits to each tile
  const visitCounts = []
  for (let i = 0; i < grid.length; i++) {
    const row = []
    for (let j = 0; j < grid[0].length; j++) {
      row.push(0)
    }
    visitCounts.push(row)
  }
  visitCounts[startPosition.y][startPosition.x] = 1

  // Trace beam path
  for (let i = 0; i < grid.length - 1; i++) {
    // Use set to ensure we don't track duplicate beams
    const newBeams = new Set()
    for (let j = 0; j < beams.length; j++) {
      const beam = beams[j]

      // Split beam if splitter found
      if (grid[beam.y + 1] && grid[beam.y + 1][beam.x] === "^") {
        newBeams.add(JSON.stringify({ x: beam.x - 1, y: beam.y + 1 }))
        newBeams.add(JSON.stringify({ x: beam.x + 1, y: beam.y + 1 }))

        visitCounts[beam.y + 1][beam.x - 1] += visitCounts[beam.y][beam.x]
        visitCounts[beam.y + 1][beam.x + 1] += visitCounts[beam.y][beam.x]
      }
      // Else move current beam down
      else {
        newBeams.add(JSON.stringify({ x: beam.x, y: beam.y + 1 }))
        visitCounts[beam.y + 1][beam.x] += visitCounts[beam.y][beam.x]
      }
    }

    beams = [...newBeams].map((beam) => JSON.parse(beam))
  }

  // Return sum of visit counts for last row
  return visitCounts[visitCounts.length - 1].reduce(
    (total, current) => total + current,
    0
  )
}

module.exports = {
  part1,
  part2,
}
