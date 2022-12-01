module.exports = (values) => {
  const totalCaloriesByElves = []

  values.forEach(value => {
    if (!value) {
      totalCaloriesByElves.push(0)
    } else {
      totalCaloriesByElves[totalCaloriesByElves.length - 1] += parseInt(value, 10)
    }
  })

  return Math.max(...totalCaloriesByElves)
}
