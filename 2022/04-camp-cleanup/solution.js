const part1 = (values) => {
  let numberOfSharedAssignments = 0

  values.forEach((row) => {
    const [[startA, endA], [startB, endB]] = row
      .split(",")
      .map((pair) => pair.split("-").map((value) => parseInt(value, 10)))

    if (
      (startA <= startB && endA >= endB) ||
      (startA >= startB && endA <= endB)
    ) {
      numberOfSharedAssignments++
    }
  })

  return numberOfSharedAssignments
}

const part2 = (values) => {
  let numberOfOverlappingRanges = 0

  values.forEach((row) => {
    const [[startA, endA], [startB, endB]] = row
      .split(",")
      .map((pair) => pair.split("-").map((value) => parseInt(value, 10)))

    if (
      (startA >= startB && startA <= endB) ||
      (startB >= startA && startB <= endA)
    ) {
      numberOfOverlappingRanges++
    }
  })

  return numberOfOverlappingRanges
}

module.exports = {
  part1,
  part2,
}
