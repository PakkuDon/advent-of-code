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

const part2 = (input) => {
  const worksheet = []
  const rows = input.trim().split("\n")
  const operatorsRow = rows[rows.length - 1]
  const operators = rows[rows.length - 1].split(/\s+/)

  // Preserve whitespace in worksheet cells by taking substrings for each cell
  // Operator position in last row is used to infer column width
  let currentIndex = 0
  for (let i = 0; i < operators.length; i++) {
    let endIndex
    // If last column read rest of string
    if (i === operators.length - 1) {
      endIndex = rows[0].length
    }
    // Otherwise read until position of next operator
    else {
      endIndex = operatorsRow.indexOf(operators[i + 1], currentIndex + 1)
    }
    const row = []
    for (let j = 0; j < rows.length - 1; j++) {
      row.push(rows[j].substring(currentIndex, endIndex))
    }
    worksheet.push(row)
    currentIndex = endIndex
  }
  // Include operators for future operations
  worksheet.push(operators)

  // Calculate sum of worksheet
  let sum = 0
  for (let i = 0; i < operators.length; i++) {
    const operators = []
    const column = worksheet[i]

    // Construct operators by concatenating values in same column
    for (let j = 0; j < column[0].length; j++) {
      let number = ""
      for (let k = 0; k < column.length; k++) {
        number += column[k][j]
      }
      // Only include operator if it's not an empty string
      // This can happen if last column for worksheet column is empty
      if (number.trim()) {
        operators.push(Number(number.trim()))
      }
    }

    // Perform operation
    const operand = worksheet[worksheet.length - 1][i]
    if (operand === "*") {
      sum += operators.reduce((total, current) => total * current, 1)
    } else if (operand === "+") {
      sum += operators.reduce((total, current) => total + current, 0)
    }
  }

  return sum
}

module.exports = {
  part1,
  part2,
}
