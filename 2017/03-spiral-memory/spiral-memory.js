const calculateSteps = (startPoint) => {
  const ring = getNearestSquare(startPoint)

  if (ring - 1 === 0) {
    return 0
  }

  const center = Math.ceil((ring - 1) / 2)
  return (center - 1 + Math.abs(center - startPoint % ring))
}

const getNearestSquare = (number) => {
  return Math.ceil(Math.sqrt(number))
}

module.exports = {
  calculateSteps,
}
