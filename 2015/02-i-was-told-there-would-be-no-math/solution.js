const parseDimensions = (row) => {
  const values = row.split("x").map((value) => Number(value))
  return {
    width: values[0],
    height: values[1],
    length: values[2],
  }
}

const part1 = (input) => {
  const presents = input
    .trim()
    .split("\n")
    .map((row) => parseDimensions(row))

  return presents.reduce((total, present) => {
    const surfaceAreaForSides = [
      present.length * present.width,
      present.width * present.height,
      present.height * present.length,
    ]
    const totalSurfaceArea = surfaceAreaForSides.reduce(
      (total, side) => total + 2 * side,
      0
    )

    const extraPaper = Math.min(...surfaceAreaForSides)

    return total + totalSurfaceArea + extraPaper
  }, 0)
}

const part2 = (input) => {
  const presents = input
    .trim()
    .split("\n")
    .map((row) => parseDimensions(row))

  return presents.reduce((total, { width, height, length }) => {
    const sortedLengths = [width, height, length].sort((a, b) => a - b)
    const [sideA, sideB] = sortedLengths

    const ribbonLength = sideA + sideA + sideB + sideB
    const bowLength = width * height * length

    return total + ribbonLength + bowLength
  }, 0)
}

module.exports = {
  part1,
  part2,
}
