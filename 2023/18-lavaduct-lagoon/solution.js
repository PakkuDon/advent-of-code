const calculateAreaInPath = (instructions, startingPosition) => {
  const visited = []
  const digger = { ...startingPosition }
  visited.push({ x: digger.x, y: digger.y })

  // Find vertices and perimeter for path
  let perimeter = 0
  instructions.forEach((instruction) => {
    switch (instruction.direction) {
      case "R":
        digger.x += instruction.meters
        break
      case "U":
        digger.y -= instruction.meters
        break
      case "D":
        digger.y += instruction.meters
        break
      case "L":
        digger.x -= instruction.meters
        break
    }
    perimeter += instruction.meters
    visited.push({ x: digger.x, y: digger.y })
  })

  // Calculate area of polygon using shoelace formula
  // https://rosettacode.org/wiki/Shoelace_formula_for_polygonal_area
  let area = 0
  for (let i = 0; i < visited.length - 1; i++) {
    const tile = visited[i]
    const nextTile = visited[i + 1]
    area += tile.x * nextTile.y - nextTile.x * tile.y
  }
  area =
    Math.abs(
      area +
        perimeter +
        visited[visited.length - 1].x * visited[0].y -
        visited[0].x * visited[visited.length - 1].y
    ) /
      2 +
    1

  return area
}

const part1 = (input) => {
  const instructions = input
    .trim()
    .split("\n")
    .map((row) => {
      const segments = row.split(" ")
      return {
        direction: segments[0],
        meters: parseInt(segments[1], 10),
        colour: segments[2],
      }
    })

  return calculateAreaInPath(instructions, { x: 1, y: 1 })
}

const part2 = (input) => {
  const hexToDirection = {
    0: "R",
    1: "D",
    2: "L",
    3: "U",
  }
  const instructions = input
    .trim()
    .split("\n")
    .map((row) => {
      const segments = row.split(" ")
      const hexSequence = segments[2].replace(/[#()]/g, "")

      return {
        direction: hexToDirection[hexSequence.substring(5)],
        meters: parseInt(hexSequence.substring(0, 5), 16),
      }
    })

  return calculateAreaInPath(instructions, { x: 1, y: 1 })
}

module.exports = {
  part1,
  part2,
}
