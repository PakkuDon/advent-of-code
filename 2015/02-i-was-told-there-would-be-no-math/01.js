const calculatePaperRequired = ({ width, height, length }) => {
  const surfaceAreaForSides = [
    length * width,
    width * height,
    height * length,
  ]

  const extraPaper = Math.min(...surfaceAreaForSides)
  const totalSurfaceArea = surfaceAreaForSides
    .reduce((total, side) => total + 2 * side, 0)

  return totalSurfaceArea + extraPaper
}

module.exports = calculatePaperRequired
