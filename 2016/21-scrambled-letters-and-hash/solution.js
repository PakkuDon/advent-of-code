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

// From https://rosettacode.org/wiki/Permutations#JavaScript
const generatePermutations = (list) => {
  if (list.length < 2) {
    return [list]
  }
  const permutations = []
  for (let i = 0; i < list.length; i++) {
    const element = list.splice(i, 1)[0]
    const subsequence = generatePermutations(list)

    for (let j = 0; j < subsequence.length; j++) {
      permutations.push([element, ...subsequence[j]])
    }
    list.splice(i, 0, element)
  }

  return permutations
}

const part2 = (input, password) => {
  const permutations = generatePermutations(password.split(""))

  // Return current permutation if it scrambles to given password
  for (let i = 0; i < permutations.length; i++) {
    const phrase = permutations[i].join("")
    if (part1(input, phrase) === password) {
      return phrase
    }
  }

  return "No result found"
}

module.exports = {
  part1,
  part2,
}
