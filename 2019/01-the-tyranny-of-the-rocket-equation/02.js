const calculateFuelRequired = require("./01")

const calculateFuelRequiredWithFuel = (mass) => {
  let fuelRequired = calculateFuelRequired(mass)
  let fuelRemaining = fuelRequired

  while (fuelRemaining > 0) {
    fuelRemaining = calculateFuelRequired(fuelRemaining)

    if (fuelRemaining > 0) {
      fuelRequired += fuelRemaining
    }
  }

  return fuelRequired
}

module.exports = calculateFuelRequiredWithFuel
