module.exports = (values) => {
  let numberOfOverlappingRanges = 0

  values.forEach(row => {
    const [[startA, endA], [startB, endB]] = row
      .split(',')
      .map(pair => pair.split('-').map(value => parseInt(value, 10)))

    if ((startA >= startB && startA <= endB) || (startB >= startA && startB <= endA)) {
      numberOfOverlappingRanges++;
    }
  })

  return numberOfOverlappingRanges
}
