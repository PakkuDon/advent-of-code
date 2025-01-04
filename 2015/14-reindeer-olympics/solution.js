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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
