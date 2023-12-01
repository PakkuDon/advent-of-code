const part1 = (input) => {
  const rows = input.split("\n")
  let extractedDigits = []

  rows.forEach((row) => {
    const digits = row.match(/\d/g)
    const firstDigit = digits[0]
    const lastDigit = digits[digits.length - 1]
    extractedDigits.push(firstDigit + "" + lastDigit)
  })

  return extractedDigits.reduce(
    (total, current) => total + parseInt(current, 10),
    0
  )
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
