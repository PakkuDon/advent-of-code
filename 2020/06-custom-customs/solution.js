const part1 = (input) => {
  const responsesByGroup = input.trim().split("\n\n")
  let sum = 0

  responsesByGroup.forEach((group) => {
    const responses = group.replace(/\s/g, "")
    const uniqueResponses = new Set()
    for (const char of responses) {
      uniqueResponses.add(char)
    }
    sum += uniqueResponses.size
  })

  return sum
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
