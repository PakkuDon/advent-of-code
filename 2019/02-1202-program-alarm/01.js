const parser = (input) => {
  const processedInput = input.slice()
  let index = 0

  while (processedInput[index] !== 99) {
    const instruction = processedInput[index]
    const a = processedInput[processedInput[index + 1]]
    const b = processedInput[processedInput[index + 2]]
    const destination = processedInput[index + 3]

    if (instruction === 1) {
      processedInput[destination] = a + b
    }
    else if (instruction === 2) {
      processedInput[destination] = a * b
    }
    else {
      throw new Error(`Invalid OpCode. Must be 1, 2, or 99. Instead got ${instruction}`)
    }

    index += 4
  }

  return processedInput
}

module.exports = parser
