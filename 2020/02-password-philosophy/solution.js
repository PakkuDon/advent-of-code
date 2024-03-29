const part1 = (input) => {
  let count = 0

  input.forEach((row) => {
    const [policy, password] = row.split(": ")
    const [min, max] = policy.match(/\d+/g).map((value) => parseInt(value, 10))
    const charToContain = policy.match(/[a-z]/i)[0]
    const regex = new RegExp(`[^${charToContain}]`, "ig")
    const passwordWithCharOnly = password.replace(regex, "")

    if (
      passwordWithCharOnly.length >= min &&
      passwordWithCharOnly.length <= max
    ) {
      count++
    }
  })

  return count
}

const part2 = (input) => {
  let count = 0

  input.forEach((row) => {
    const [policy, password] = row.split(": ")
    const [positionA, positionB] = policy
      .match(/\d+/g)
      .map((value) => parseInt(value, 10))
    const charToContain = policy.match(/[a-z]/i)[0]

    if (
      (password[positionA - 1] === charToContain) ^
      (password[positionB - 1] === charToContain)
    ) {
      count++
    }
  })

  return count
}

module.exports = {
  part1,
  part2,
}
