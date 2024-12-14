const part1 = (input, width, height) => {
  // Parse input
  const robots = input
    .trim()
    .split("\n")
    .map((row) => {
      const digits = row.match(/-?\d+/g).map((value) => Number(value))
      return {
        x: digits[0],
        y: digits[1],
        vx: digits[2],
        vy: digits[3],
      }
    })

  // Simulate robot movements after 100 seconds
  for (let i = 0; i < 100; i++) {
    robots.forEach((robot) => {
      let newX = (robot.x + robot.vx) % width
      let newY = (robot.y + robot.vy) % height

      // Wrap negative values around
      if (newX < 0) {
        newX = width - Math.abs(newX)
      }
      if (newY < 0) {
        newY = height - Math.abs(newY)
      }

      robot.x = newX
      robot.y = newY
    })
  }

  const halfX = Math.floor(width / 2)
  const halfY = Math.floor(height / 2)

  const robotsInQuadrants = robots.filter(
    (robot) => robot.x !== halfX && robot.y !== halfY
  )

  const quadrants = [0, 0, 0, 0]
  robotsInQuadrants.forEach((robot) => {
    if (robot.y < halfY) {
      if (robot.x < halfX) {
        quadrants[0]++
      } else {
        quadrants[1]++
      }
    } else {
      if (robot.x < halfX) {
        quadrants[2]++
      } else {
        quadrants[3]++
      }
    }
  })

  return quadrants.reduce((total, current) => total * current, 1)
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
