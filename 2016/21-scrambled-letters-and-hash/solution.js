const part1 = (input, password) => {
  let chars = password.split("")

  // Process instructions
  input
    .trim()
    .split("\n")
    .forEach((instruction) => {
      if (instruction.startsWith("swap position")) {
        const [indexA, indexB] = instruction
          .match(/\d+/g)
          .map((value) => Number(value))
        const temp = chars[indexA]
        chars[indexA] = chars[indexB]
        chars[indexB] = temp
      } else if (instruction.startsWith("swap letter")) {
        const [_, charA, charB] = instruction.match(
          /swap letter (\w+) with letter (\w+)/
        )
        const indexesA = chars
          .map((char, index) => (char === charA ? index : null))
          .filter((value) => value !== null)
        const indexesB = chars
          .map((char, index) => (char === charB ? index : null))
          .filter((value) => value !== null)
        indexesA.forEach((index) => (chars[index] = charB))
        indexesB.forEach((index) => (chars[index] = charA))
      } else if (instruction.startsWith("rotate left")) {
        const steps = Number(instruction.match(/\d+/g)[0])
        for (let i = 0; i < steps; i++) {
          chars.push(chars.shift())
        }
      } else if (instruction.startsWith("rotate right")) {
        const steps = Number(instruction.match(/\d+/g)[0])

        for (let i = 0; i < steps; i++) {
          chars.unshift(chars.pop())
        }
      } else if (instruction.startsWith("rotate based")) {
        const char = instruction.split(" ").pop()
        let rotations = chars.indexOf(char)
        if (rotations >= 4) {
          rotations++
        }
        for (let i = 0; i <= rotations; i++) {
          chars.unshift(chars.pop())
        }
      } else if (instruction.startsWith("reverse")) {
        const [indexA, indexB] = instruction
          .match(/\d+/g)
          .map((value) => Number(value))

        chars = [
          ...chars.slice(0, indexA),
          ...chars.slice(indexA, indexB + 1).reverse(),
          ...chars.slice(indexB + 1),
        ]
      } else if (instruction.startsWith("move")) {
        const [indexA, indexB] = instruction
          .match(/\d+/g)
          .map((value) => Number(value))
        const char = chars.splice(indexA, 1)[0]
        chars.splice(indexB, 0, char)
      }
    })

  return chars.join("")
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
