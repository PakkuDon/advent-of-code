const part1 = (input, targetLength) => {
  let a = input.trim()

  // Generate sequences until target length reached
  while (a.length < targetLength) {
    const b = a
      .split("")
      .reverse()
      .map((char) => (char === "0" ? "1" : "0"))
      .join("")
    a = `${a}0${b}`
  }

  // Truncate sequence if value exceeds target length
  a = a.substring(0, targetLength)

  // Generate checksum for sequence
  let checksum = a
  while (checksum.length % 2 === 0) {
    const pairs = checksum.match(/\w{2}/g)
    checksum = pairs.map((pair) => (pair[0] === pair[1] ? "1" : "0")).join("")
  }

  return checksum
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
