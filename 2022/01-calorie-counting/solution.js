const part1 = (values) => {
  const totalCaloriesByElves = []

  values.forEach((value) => {
    if (!value) {
      totalCaloriesByElves.push(0)
    } else {
      totalCaloriesByElves[totalCaloriesByElves.length - 1] += parseInt(
        value,
        10
      )
    }
  })

  return Math.max(...totalCaloriesByElves)
}

const part2 = (values) => {
  const totalCaloriesByElves = []

  values.forEach((value) => {
    if (!value) {
      totalCaloriesByElves.push(0)
    } else {
      totalCaloriesByElves[totalCaloriesByElves.length - 1] += parseInt(
        value,
        10
      )
    }
  })

  totalCaloriesByElves.sort((a, b) => b - a)
  return totalCaloriesByElves
    .slice(0, 3)
    .reduce((total, current) => total + current)
}

module.exports = {
  part1,
  part2,
}
