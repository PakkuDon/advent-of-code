const getComboOperand = (operand, registers) => {
  switch (operand) {
    case 4:
      return registers[0]
    case 5:
      return registers[1]
    case 6:
      return registers[2]
    default:
      return operand
  }
}

const getProgramOutput = (registers, instructions) => {
  // Process instructions
  let pointer = 0
  let output = []
  while (pointer < instructions.length) {
    const opcode = instructions[pointer]
    let operand = instructions[pointer + 1]
    let hasJumped = false

    // Determine what instruction to execute
    // opcode 1 - adv
    if (opcode === 0) {
      registers[0] = Math.floor(
        registers[0] / Math.pow(2, getComboOperand(operand, registers))
      )
    }
    // opcode 1 - bxl
    else if (opcode === 1) {
      registers[1] = registers[1] ^ operand
    }
    // opcode 2 - bst
    else if (opcode === 2) {
      // Use & 7 rather than module 8 as modulo triggers an overflow resulting in different results
      registers[1] = getComboOperand(operand, registers) & 7
    }
    // opcode 3 - jnz
    else if (opcode === 3) {
      if (registers[0] !== 0) {
        pointer = operand
        hasJumped = true
      }
    }
    // opcode 4 - bxc
    else if (opcode === 4) {
      registers[1] = registers[1] ^ registers[2]
    }
    // opcode 5 - out
    else if (opcode === 5) {
      // Use & 7 rather than module 8 as modulo triggers an overflow resulting in different results
      output.push(getComboOperand(operand, registers) & 7)
    }
    // opcode 6 - bdv
    else if (opcode === 6) {
      registers[1] = Math.floor(
        registers[0] / Math.pow(2, getComboOperand(operand, registers))
      )
    }
    // opcode 7 - cdv
    else if (opcode === 7) {
      registers[2] = Math.floor(
        registers[0] / Math.pow(2, getComboOperand(operand, registers))
      )
    }

    if (!hasJumped) {
      pointer += 2
    }
  }

  return output
}

const part1 = (input) => {
  // Parse input
  const [registerInput, programInput] = input.trim().split("\n\n")
  const registers = registerInput
    .split("\n")
    .flatMap((row) => row.match(/\d+/g).map((value) => Number(value)))
  const instructions = programInput
    .split(": ")[1]
    .split(",")
    .map((value) => Number(value))

  return getProgramOutput(registers, instructions).join(",")
}

const part2 = (input) => {
  // Parse input
  const programInput = input.trim().split("\n\n")[1]
  const instructionText = programInput.split(": ")[1]
  const instructions = instructionText.split(",").map((value) => Number(value))

  let a = 0

  // Find a value that causes program to output itself
  for (let i = instructions.length - 1; i >= 0; i--) {
    // Increase value by 8 as operations are based around mod 8s
    a *= 8
    // Look for a value that generates right-most subset of instructions,
    // then multiply a by 8 to find next-most significant digit
    const subset = instructions.slice(i).join(",")
    while (true) {
      const output = getProgramOutput([a, 0, 0], instructions)

      if (output.join(",") === subset) {
        break
      }
      a++
    }
  }

  return a
}

module.exports = {
  part1,
  part2,
}
