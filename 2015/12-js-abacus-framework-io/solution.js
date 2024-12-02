const part1 = (input) => {
  return (input.trim().match(/-?\d+/g) || [])
    .map((value) => parseInt(value, 10))
    .reduce((total, current) => total + current, 0)
}

const calculateSumOfObject = (object) => {
  const values = Object.values(object)

  if (
    object.constructor === Object &&
    values.some((value) => value === "red")
  ) {
    return 0
  }

  let sum = 0
  values.forEach((value) => {
    if (Array.isArray(value)) {
      sum += calculateSumOfObject(value)
    } else if (value.constructor === Object) {
      sum += calculateSumOfObject(value)
    } else if (!isNaN(value)) {
      sum += value
    }
  })

  return sum
}

const part2 = (input) => {
  let obj = JSON.parse(input.trim())
  return calculateSumOfObject(obj)
}

module.exports = {
  part1,
  part2,
}
