const chronalCalibration = (frequencies) => {
  const pastFrequencies = []
  let currentFrequency = 0

  pastFrequencies.push(currentFrequency)

  while (true) {
    for (let i = 0; i < frequencies.length; i++) {
      currentFrequency += frequencies[i]
      pastFrequencies.push(currentFrequency)

      if (
        pastFrequencies.indexOf(currentFrequency) !==
        pastFrequencies.lastIndexOf(currentFrequency)
      ) {
        return currentFrequency
      }
    }
  }
}

module.exports = chronalCalibration
