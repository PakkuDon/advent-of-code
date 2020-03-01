const calculateRibbonRequired = ({ width, height, length }) => {
  const sortedLengths = [width, height, length].sort((a, b) => a - b)
  const [sideA, sideB] = sortedLengths

  const ribbonLength = sideA + sideA + sideB + sideB
  const bowLength = width * height * length

  return ribbonLength + bowLength
}

module.exports = calculateRibbonRequired
