const part1 = (input) => {
  const instructions = input.split("\n")
  const indicesExecuted = new Set()
  let index = 0
  let accumulator = 0

  while (true) {
    if (indicesExecuted.has(index)) {
      return accumulator
    }

    indicesExecuted.add(index)

    const [_, instruction, valueText] =
      instructions[index].match(/(\w+) ([+-]\d+)/)
    const value = parseInt(valueText, 10)
    if (instruction === "acc") {
      accumulator += value
      index++
    } else if (instruction === "jmp") {
      index = (index + value) % instructions.length
    } else {
      // nop case
      index++
    }
  }
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
