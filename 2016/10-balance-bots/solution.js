const parseInput = (input) => {
  const robots = []
  const instructions = input.trim().split("\n")

  instructions.forEach((instruction) => {
    // value - Assign value to given robot
    if (instruction.startsWith("value")) {
      const [value, botNumber] = instruction
        .match(/\d+/g)
        .map((value) => Number(value))
      if (!robots[botNumber]) {
        robots[botNumber] = { number: botNumber, values: [] }
      }
      robots[botNumber].values.push(value)
    }
    // bot - Set output destinations
    else if (instruction.startsWith("bot")) {
      let [_, source, lowDestination, highDestination] = instruction.match(
        /bot (\d+) gives low to (\w+ \d+) and high to (\w+ \d+)/
      )
      const botNumber = Number(source)
      if (!robots[botNumber]) {
        robots[botNumber] = { number: botNumber, values: [] }
      }
      robots[botNumber].lowDestination = lowDestination
      robots[botNumber].highDestination = highDestination
    }
  })

  return robots
}

const processInstructions = (robots, outputs, loopUntil) => {
  // Loop until end condition reached or available options exhausted
  const queue = []
  queue.push(robots.filter((robot) => robot.values.length === 2)[0])

  while (queue.length > 0 && !loopUntil(robots)) {
    const robot = queue.shift()
    // Move to next node if robot no longer has two values to measure
    if (robot.values.length !== 2) {
      continue
    }

    // Redistribute values from current robot
    const [low, high] = robot.values.toSorted((a, b) => a - b)
    if (robot.lowDestination.startsWith("bot")) {
      const lowDestination = Number(robot.lowDestination.match(/\d+/)[0])
      robots[lowDestination].values.push(low)
      if (robots[lowDestination].values.length === 2) {
        queue.push(robots[lowDestination])
      }
    } else {
      const lowDestination = Number(robot.lowDestination.match(/\d+/)[0])
      outputs[lowDestination] = low
    }
    if (robot.highDestination.startsWith("bot")) {
      const highDestination = Number(robot.highDestination.match(/\d+/)[0])
      robots[highDestination].values.push(high)
      if (robots[highDestination].values.length === 2) {
        queue.push(robots[highDestination])
      }
    } else {
      const highDestination = Number(robot.highDestination.match(/\d+/)[0])
      outputs[highDestination] = high
    }

    // Remove values from robot as values have been distributed
    robot.values = []
  }
}

const part1 = (input, a, b) => {
  const robots = parseInput(input)
  const outputs = []

  processInstructions(robots, outputs, (robots) =>
    robots.some((robot) => robot.values.includes(a) && robot.values.includes(b))
  )

  const robot = robots.find(
    (robot) => robot.values.includes(a) && robot.values.includes(b)
  )
  return robot.number
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
