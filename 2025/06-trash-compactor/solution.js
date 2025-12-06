const part1 = (input) => {
  const worksheet = input
    .trim()
    .split("\n")
    .map((row) => row.trim().split(/\s+/))

  let sum = 0
  for (let i = 0; i < worksheet[0].length; i++) {
    const operators = []
    const operand = worksheet[worksheet.length - 1][i]

    // Get operators
    for (let j = 0; j < worksheet[0].length - 1; j++) {
      if (worksheet[j] && worksheet[j][i] && !isNaN(worksheet[j][i])) {
        operators.push(Number(worksheet[j][i]))
      }
    }

    // Perform operation
    if (operand === "*") {
      sum += operators.reduce((total, current) => total * current, 1)
    } else if (operand === "+") {
      sum += operators.reduce((total, current) => total + current, 0)
    }
  }

  return sum
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
