const part1 = (input) => {
  const operations = input.match(/mul\(\d+,\d+\)/g)
  let sum = 0
  operations.forEach((operation) => {
    const [digitA, digitB] = operation.match(/\d+/g)
    sum += parseInt(digitA, 10) * parseInt(digitB, 10)
  })

  return sum
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
