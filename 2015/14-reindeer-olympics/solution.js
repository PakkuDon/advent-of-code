const part1 = (input, raceDuration) => {
  // Parse input
  const reindeers = input
    .trim()
    .split("\n")
    .map((row) => {
      const [speed, duration, restTime] = row
        .match(/\d+/g)
        .map((value) => Number(value))
      return { speed, duration, restTime }
    })

  // Calculate distance travelled for each reindeer
  const distances = reindeers.map((reindeer) => {
    let distance = 0
    let secondsEllapsed = 0
    let secondsTravelled = 0
    let secondsRested = 0
    let isResting = false

    while (secondsEllapsed < raceDuration) {
      // Flip state if reindeer has travelled or rested for allowed amount
      if (secondsTravelled === reindeer.duration) {
        isResting = true
        secondsTravelled = 0
        secondsRested = 0
      } else if (secondsRested === reindeer.restTime) {
        isResting = false
        secondsTravelled = 0
        secondsRested = 0
      }

      if (isResting) {
        secondsRested++
      } else {
        distance += reindeer.speed
        secondsTravelled++
      }

      secondsEllapsed++
    }

    return distance
  })

  // Return distance travelled by winning reindeer
  return Math.max(...distances)
}

const part2 = (input, raceDuration) => {
  // Parse input
  const reindeers = input
    .trim()
    .split("\n")
    .map((row) => {
      const [speed, duration, restTime] = row
        .match(/\d+/g)
        .map((value) => Number(value))
      return { speed, duration, restTime }
    })

  // Calculate distances travelled by each reindeer each second
  const distances = reindeers.map((reindeer) => {
    let distancesPerSecond = []
    let distance = 0
    let secondsEllapsed = 0
    let secondsTravelled = 0
    let secondsRested = 0
    let isResting = false

    while (secondsEllapsed < raceDuration) {
      // Flip state if reindeer has travelled or rested for allowed amount
      if (secondsTravelled === reindeer.duration) {
        isResting = true
        secondsTravelled = 0
        secondsRested = 0
      } else if (secondsRested === reindeer.restTime) {
        isResting = false
        secondsTravelled = 0
        secondsRested = 0
      }

      if (isResting) {
        secondsRested++
      } else {
        distance += reindeer.speed
        secondsTravelled++
      }

      distancesPerSecond.push(distance)
      secondsEllapsed++
    }

    return distancesPerSecond
  })

  // Count points awarded to each reindeer
  const points = reindeers.map(() => 0)
  for (let i = 0; i < distances[0].length; i++) {
    // Get distances travelled in current second
    const currentDistances = []
    for (let j = 0; j < reindeers.length; j++) {
      currentDistances.push(distances[j][i])
    }

    // Award points to reindeers in lead at given second
    const maxDistance = Math.max(...currentDistances)
    for (let j = 0; j < reindeers.length; j++) {
      if (currentDistances[j] === maxDistance) {
        points[j]++
      }
    }
  }

  // Return points gathered by winning reindeer
  return Math.max(...points)
}

module.exports = {
  part1,
  part2,
}
