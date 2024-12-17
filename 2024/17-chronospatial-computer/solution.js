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
      let comboOperand = operand
      if (operand === 4) {
        comboOperand = registers[0]
      } else if (operand === 5) {
        comboOperand = registers[1]
      } else if (operand === 6) {
        comboOperand = registers[2]
      }
      registers[0] = Math.floor(registers[0] / Math.pow(2, comboOperand))
    }
    // opcode 1 - bxl
    else if (opcode === 1) {
      registers[1] = registers[1] ^ operand
    }
    // opcode 2 - bst
    else if (opcode === 2) {
      let comboOperand = operand
      if (operand === 4) {
        comboOperand = registers[0]
      } else if (operand === 5) {
        comboOperand = registers[1]
      } else if (operand === 6) {
        comboOperand = registers[2]
      }
      registers[1] = comboOperand % 8
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
      let comboOperand = operand
      if (operand === 4) {
        comboOperand = registers[0]
      } else if (operand === 5) {
        comboOperand = registers[1]
      } else if (operand === 6) {
        comboOperand = registers[2]
      }

      output.push(comboOperand % 8)
    }
    // opcode 6 - bdv
    else if (opcode === 6) {
      let comboOperand = operand
      if (operand === 4) {
        comboOperand = registers[0]
      } else if (operand === 5) {
        comboOperand = registers[1]
      } else if (operand === 6) {
        comboOperand = registers[2]
      }
      registers[1] = Math.floor(registers[0] / Math.pow(2, comboOperand))
    }
    // opcode 7 - cdv
    else if (opcode === 7) {
      let comboOperand = operand
      if (operand === 4) {
        comboOperand = registers[0]
      } else if (operand === 5) {
        comboOperand = registers[1]
      } else if (operand === 6) {
        comboOperand = registers[2]
      }
      registers[2] = Math.floor(registers[0] / Math.pow(2, comboOperand))
    }

    if (!hasJumped) {
      pointer += 2
    }
  }

  return output.join(",")
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
