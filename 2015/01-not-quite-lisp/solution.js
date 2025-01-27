const part1 = (input) => {
  let floor = 0

  for (let char of input) {
    if (char === ")") {
      floor--
    }
    if (char === "(") {
      floor++
    }
  }

  return floor
}

const part2 = (input) => {
  let floor = 0

  for (let i = 0; i < input.length; i++) {
    const char = input[i]

    if (char === ")") {
      floor--
    }
    if (char === "(") {
      floor++
    }

    if (floor === -1) {
      return i + 1
    }
  }

  return -1
}

module.exports = {
  part1,
  part2,
}
