const part1 = (input) => {
  const [
    seeds,
    seedToSoilValues,
    soilToFertilizerValues,
    fertilizerToWaterValues,
    waterToLightValues,
    lightToTemperatureValues,
    temperatureToHumidityValues,
    humidityToLocationValues,
  ] = input
    .split("\n\n")
    .map((mapInput) => mapInput.match(/\d+/g))
    .map((row) => row.map((value) => parseInt(value, 10)))

  const maps = [
    seedToSoilValues,
    soilToFertilizerValues,
    fertilizerToWaterValues,
    waterToLightValues,
    lightToTemperatureValues,
    temperatureToHumidityValues,
    humidityToLocationValues,
  ]

  const seedLocations = seeds.map((seed) => {
    // Iterate through each seed and find its location
    let value = seed

    for (let i = 0; i < maps.length; i++) {
      const map = maps[i]

      // Map value to value in next map
      for (let j = 0; j < map.length; j += 3) {
        const [destinationStart, sourceStart, range] = map.slice(j, j + 3)
        if (value >= sourceStart && value < sourceStart + range) {
          const distance = Math.abs(value - sourceStart)
          value = destinationStart + distance
          break
        }
      }
    }

    return value
  })

  return Math.min(...seedLocations)
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
