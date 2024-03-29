const part1 = (input) => {
  const [seeds, ...maps] = input
    .split("\n\n")
    .map((mapInput) => mapInput.match(/\d+/g))
    .map((row) => row.map((value) => parseInt(value, 10)))

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

const part2 = (input) => {
  console.log("2023 Day 5 Part 2 currently takes ~5 minutes to run.")
  const [seedInput, ...mapInputs] = input
    .split("\n\n")
    .map((mapInput) => mapInput.match(/\d+/g))
    .map((row) => row.map((value) => parseInt(value, 10)))

  const seedRanges = []
  for (let i = 0; i < seedInput.length; i += 2) {
    const [start, length] = seedInput.slice(i, i + 2)
    seedRanges.push({ start, end: start + length - 1, length })
  }

  const maps = mapInputs.map((input) => {
    const map = []
    for (let i = 0; i < input.length; i += 3) {
      map.push(input.slice(i, i + 3))
    }
    return map
  })

  let minLocation = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < seedRanges.length; i++) {
    const { start, end } = seedRanges[i]
    console.log({ start, end, i })

    // Iterate through each seed and find its location
    for (let seed = start; seed <= end; seed++) {
      let value = seed

      for (let i = 0; i < maps.length; i++) {
        // Map value to value in next map
        for (let j = 0; j < maps[i].length; j++) {
          // If value is between source range map value to destination
          if (value >= maps[i][j][1] && value < maps[i][j][1] + maps[i][j][2]) {
            value = maps[i][j][0] + Math.abs(value - maps[i][j][1])
            break
          }
        }
      }

      if (value < minLocation) {
        minLocation = value
      }
    }
  }

  return minLocation
}

module.exports = {
  part1,
  part2,
}
