const productOfFinalDepthAndDistance = (instructions) => {
  const submarine = {
    depth: 0,
    distance: 0,
    aim: 0,
  }

  instructions.forEach((instruction) => {
    let [type, distance] = instruction.split(" ")
    distance = parseInt(distance, 10)

    switch (type) {
      case "forward":
        submarine.distance += distance
        submarine.depth += submarine.aim * distance
        break
      case "down":
        submarine.aim += distance
        break
      case "up":
        submarine.aim -= distance
        break
    }
  })

  return submarine.depth * submarine.distance
}

module.exports = productOfFinalDepthAndDistance
