const countDepthIncreases = (readings) => {
  let count = 0
  readings.forEach((reading, index) => {
    if (index > 0 && reading > readings[index - 1]) {
      count++
    }
  })
  return count
}

module.exports = countDepthIncreases
