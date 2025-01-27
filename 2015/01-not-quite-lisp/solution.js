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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
