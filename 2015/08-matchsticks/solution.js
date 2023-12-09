const part1 = (input) => {
  const strings = input.trim().split("\n")
  let sourceLength = 0
  let actualLength = 0

  strings.forEach((string) => {
    sourceLength += string.length
    actualLength += eval(string).length
  })

  return sourceLength - actualLength
}

const part2 = (input) => {
  const strings = input.trim().split("\n")
  let sourceLength = 0
  let encodedLength = 0

  strings.forEach((string) => {
    sourceLength += string.length
    encodedLength += JSON.stringify(string).length
  })

  return encodedLength - sourceLength
}

module.exports = {
  part1,
  part2,
}
