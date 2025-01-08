const part1 = (input, lowerBound, upperBound) => {
  // Parse input
  const hailstones = input
    .trim()
    .split("\n")
    .map((row) => {
      const [px, py, pz, vx, vy, vz] = row
        .match(/\-?\d+/g)
        .map((value) => parseInt(value, 10))
      return { px, py, pz, vx, vy, vz }
    })

  // Get indices of hailstones to compare
  const pairsOfIndices = new Set()
  for (let i = 0; i < hailstones.length; i++) {
    for (let j = 0; j < hailstones.length; j++) {
      if (i === j) {
        continue
      }

      pairsOfIndices.add([i, j].sort((a, b) => a - b).join(","))
    }
  }

  // Count potential intersections between pairs of hailstones ignoring z-axis
  let intersections = 0
  for (let pair of pairsOfIndices) {
    const [i, j] = pair.split(",").map((value) => Number(value))

    const a = hailstones[i]
    const b = hailstones[j]

    const aM = a.vy / a.vx
    const bM = b.vy / b.vx

    const intersectX = (aM * a.px - bM * b.px + b.py - a.py) / (aM - bM)
    const intersectY = aM * (intersectX - a.px) + a.py

    const aToIntersect = intersectX - a.px
    const bToIntersect = intersectX - b.px

    // If intersection occurred in past for either hailstone skip intersection check
    // Check if aToIntersect is same polarity as velocity
    if (
      (aToIntersect < 0 && a.vx > 0) ||
      (aToIntersect > 0 && a.vx < 0) ||
      (bToIntersect < 0 && b.vx > 0) ||
      (bToIntersect > 0 && b.vx < 0)
    ) {
      continue
    }

    // Check if intersection occurs within bounds
    if (
      intersectX >= lowerBound &&
      intersectX <= upperBound &&
      intersectY >= lowerBound &&
      intersectY <= upperBound
    ) {
      intersections++
    }
  }

  return intersections
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
