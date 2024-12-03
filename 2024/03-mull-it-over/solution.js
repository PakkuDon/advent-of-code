const part1 = (input) => {
  const operations = input.match(/mul\(\d+,\d+\)/g)
  let sum = 0
  operations.forEach((operation) => {
    const [digitA, digitB] = operation.match(/\d+/g)
    sum += parseInt(digitA, 10) * parseInt(digitB, 10)
  })

  return sum
}

const part2 = (input) => {
  const operations = input.match(/do\(\)|don't\(\)|mul\(\d+,\d+\)/g)
  let mulEnabled = true

  let sum = 0
  operations.forEach((operation) => {
    if (operation.includes("don't()")) {
      mulEnabled = false
    } else if (operation.includes("do()")) {
      mulEnabled = true
    } else if (mulEnabled) {
      const [digitA, digitB] = operation.match(/\d+/g)
      sum += parseInt(digitA, 10) * parseInt(digitB, 10)
    }
  })

  return sum
}

module.exports = {
  part1,
  part2,
}
