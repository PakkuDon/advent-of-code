const productOfFinalDepthAndDistance = (instructions) => {
  const submarine = {
    depth: 0,
    distance: 0,
  }

  instructions.forEach((instruction) => {
    let [type, distance] = instruction.split(" ")
    distance = parseInt(distance, 10)

    switch (type) {
      case "forward":
        submarine.distance += distance
        break
      case "down":
        submarine.depth += distance
        break
      case "up":
        submarine.depth -= distance
        break
    }
  })

  return submarine.depth * submarine.distance
}

module.exports = productOfFinalDepthAndDistance
