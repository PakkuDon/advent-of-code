const calculateValue = (sequence) => {
  let value = 0
  for (let i = 0; i < sequence.length; i++) {
    const char = sequence[i]
    value += char.charCodeAt(0)
    value *= 17
    value %= 256
  }

  return value
}

const part1 = (input) => {
  const instructions = input.trim().split(",")
  let sum = 0

  instructions.forEach((instruction) => {
    sum += calculateValue(instruction)
  })

  return sum
}

const part2 = (input) => {
  const instructions = input
    .trim()
    .split(",")
    .map((sequence) => {
      let segments = sequence.split(/\b/)
      return {
        label: segments[0],
        operation: segments[1],
        focalLength: segments[2],
      }
    })

  // Organise lens by instructions
  const boxes = new Array(256).fill().map(() => [])
  instructions.forEach((instruction) => {
    const index = calculateValue(instruction.label)
    if (instruction.operation === "-") {
      const box = boxes[index]
      const indexToDelete = box.findIndex(
        (lens) => lens.label === instruction.label
      )
      if (indexToDelete > -1) {
        boxes[index] = [
          ...box.slice(0, indexToDelete),
          ...box.slice(indexToDelete + 1),
        ]
      }
    } else if (instruction.operation === "=") {
      const box = boxes[index]
      const indexOfPreviousInstance = box.findIndex(
        (lens) => lens.label === instruction.label
      )
      if (indexOfPreviousInstance > -1) {
        boxes[index] = [
          ...box.slice(0, indexOfPreviousInstance),
          instruction,
          ...box.slice(indexOfPreviousInstance + 1),
        ]
      } else {
        box.push(instruction)
      }
    }
  })

  // Calculate focusing power
  let focusingPower = 0
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].forEach((lens, index) => {
      focusingPower += (i + 1) * (index + 1) * lens.focalLength
    })
  }
  return focusingPower
}

module.exports = {
  part1,
  part2,
}
