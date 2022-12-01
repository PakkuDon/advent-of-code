module.exports = (values) => {
  const totalCaloriesByElves = []

  values.forEach(value => {
    if (!value) {
      totalCaloriesByElves.push(0)
    } else {
      totalCaloriesByElves[totalCaloriesByElves.length - 1] += parseInt(value, 10)
    }
  })

  totalCaloriesByElves.sort((a, b) => b - a)
  return totalCaloriesByElves.slice(0, 3).reduce((total, current) => total + current)
}
