const calculateFuelRequired = mass => (
  Math.floor(mass / 3) - 2
)

module.exports = calculateFuelRequired
