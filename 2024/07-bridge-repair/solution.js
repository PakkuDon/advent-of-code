const part1 = (input) => {
  // Parse input
  const equations = input
    .trim()
    .split("\n")
    .map((row) => row.split(/:? /).map((value) => Number(value)))

  // Determine which equations can match left-most value
  const validEquations = equations.filter((equation) => {
    const [target, ...numbers] = equation

    for (let i = 0; i < Math.pow(2, numbers.length); i++) {
      const mask = i
        .toString(2)
        .padStart(numbers.length - 1, "0")
        .replace(/0/g, "+")
        .replace(/1/g, "*")

      let result = numbers[0]
      for (let j = 1; j < numbers.length; j++) {
        if (mask[j] === "+") {
          result += numbers[j]
        } else {
          result *= numbers[j]
        }
      }

      if (result === target) {
        return true
      }
    }
  })

  // Return sum of valid equations
  return validEquations.reduce((total, equation) => total + equation[0], 0)
}

const part2 = (input) => {
  // Parse input
  const equations = input
    .trim()
    .split("\n")
    .map((row) => row.split(/:? /).map((value) => Number(value)))

  // Determine which equations can match left-most value
  const validEquations = equations.filter((equation) => {
    const [target, ...numbers] = equation

    for (let i = 0; i < Math.pow(3, numbers.length); i++) {
      const mask = i
        .toString(3)
        .padStart(numbers.length - 1, "0")
        .replace(/0/g, "+")
        .replace(/1/g, "*")
        .replace(/2/g, "|")

      let result = numbers[0]
      for (let j = 1; j < numbers.length; j++) {
        if (mask[j] === "+") {
          result += numbers[j]
        } else if (mask[j] === "*") {
          result *= numbers[j]
        } else {
          result = Number(result + "" + numbers[j])
        }

        // Break early if potential result of current mask exceeds target
        if (result > target) {
          break
        }
      }

      if (result === target) {
        return true
      }
    }
  })

  // Return sum of valid equations
  return validEquations.reduce((total, equation) => total + equation[0], 0)
}

module.exports = {
  part1,
  part2,
}
