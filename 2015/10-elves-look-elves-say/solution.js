const part1 = (input, iterations) => {
  let sequence = input.trim()

  for (let i = 0; i < iterations; i++) {
    let str = ""
    let current = sequence[0]
    let count = 1

    // Generate look-say encoding of sequence
    // Iterate once past sequence to append last repeated string to str
    for (let j = 1; j <= sequence.length; j++) {
      // If new character detected append current char * run-length to str
      if (sequence[j] !== current) {
        str += `${count}${current}`
        current = sequence[j]
        count = 1
      } else {
        count++
      }
    }

    sequence = str
  }

  return sequence
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
