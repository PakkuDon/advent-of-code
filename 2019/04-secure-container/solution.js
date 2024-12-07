const part1 = (input) => {
  const [min, max] = input.split("-").map((value) => Number(value))

  // Count number of valid passwords in input range
  let count = 0
  for (let i = min; i <= max; i++) {
    let str = i.toString()
    // Reject value if not a six-digit string
    if (str.length !== 6) {
      continue
    }

    // Reject value if it has no same adjacent digits
    if (
      !str
        .slice(1)
        .split("")
        .some((digit, index) => digit === str[index])
    ) {
      continue
    }

    // Reject value if not sorted in ascending order
    if (str !== str.split("").sort().join("")) {
      continue
    }

    count++
  }

  return count
}

const part2 = (input) => {
  const [min, max] = input.split("-").map((value) => Number(value))

  // Count number of valid passwords in input range
  let count = 0
  for (let i = min; i <= max; i++) {
    let str = i.toString()
    // Reject value if not a six-digit string
    if (str.length !== 6) {
      continue
    }

    // Reject value if it does not have one set of exactly two adjacent digits
    if (
      !str.split("").some((digit) => {
        return (
          str.match(new RegExp(`${digit}{2}`)) &&
          !str.match(new RegExp(`${digit}{3}`))
        )
      })
    ) {
      continue
    }

    // Reject value if not sorted in ascending order
    if (str !== str.split("").sort().join("")) {
      continue
    }

    count++
  }

  return count
}

module.exports = {
  part1,
  part2,
}
