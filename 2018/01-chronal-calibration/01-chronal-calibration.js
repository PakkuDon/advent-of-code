const chronalCalibration = (frequencies) =>
  frequencies.reduce((a, b) => a + b, 0)

module.exports = chronalCalibration
