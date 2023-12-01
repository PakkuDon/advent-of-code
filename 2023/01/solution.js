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

const part2 = (input) => {
  const rows = input.split("\n")
  let extractedDigits = []
  const wordsToDigits = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }

  rows.forEach((row) => {
    const digits = row.match(
      /(\d|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine))/g
    )
    let firstDigit = digits[0]
    let lastDigit = digits[digits.length - 1]

    if (isNaN(firstDigit)) {
      firstDigit = wordsToDigits[firstDigit]
    }
    if (isNaN(lastDigit)) {
      lastDigit = wordsToDigits[lastDigit]
    }

    extractedDigits.push(firstDigit + "" + lastDigit)
  })

  return extractedDigits.reduce(
    (total, current) => total + parseInt(current, 10),
    0
  )
}

module.exports = {
  part1,
  part2,
}
