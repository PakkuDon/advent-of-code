const isRegister = (value) => value.match(/^[a-d]$/)

const processInstructions = (instructions, registers) => {
  let i = 0

  while (i < instructions.length) {
    const instruction = instructions[i]
    let hasJumped = false

    // cpy - Copy value to specified register
    if (instruction.startsWith("cpy")) {
      const [_, value, target] = instruction.split(" ")
      // Only process instruction if target is valid
      if (isRegister(target)) {
        // If value is not a number copy value from register
        if (isNaN(value)) {
          registers[target] = registers[value]
        }
        // Else assign number to register
        else {
          registers[target] = Number(value)
        }
      }
    }
    // inc - Increment value in target register
    else if (instruction.startsWith("inc")) {
      const [_, target] = instruction.split(" ")
      if (isRegister(target)) {
        registers[target]++
      }
    }
    // dec - Decrement value in target register
    else if (instruction.startsWith("dec")) {
      const [_, target] = instruction.split(" ")
      if (isRegister(target)) {
        registers[target]--
      }
    }
    // jnz - Jump to specified instruction if target value is not zero
    else if (instruction.startsWith("jnz")) {
      const [_, target, offset] = instruction.split(" ")
      let value
      // If value is not a number use value from register
      if (isNaN(target)) {
        value = registers[target]
      } else {
        value = Number(target)
      }

      // If value is non-zero jump to instruction specified by offset
      if (value !== 0) {
        // If offset is not a number use value from register
        if (isNaN(offset)) {
          i += registers[offset]
        } else {
          i += Number(offset)
        }
        hasJumped = true
      }
    }
    // New instruction
    // tgl - Toggle instruction x away from current. x represents register containing value
    else if (instruction.startsWith("tgl")) {
      const [_, targetRegister] = instruction.split(" ")

      // Only process toggle if targetRegister is valid and if target index is in range
      const targetIndex = i + registers[targetRegister]
      if (
        !isNaN(targetIndex) &&
        targetIndex >= 0 &&
        targetIndex < instructions.length
      ) {
        const instructionToUpdate = instructions[targetIndex]

        // Toggle one-argument instructions
        if (instructionToUpdate.split(" ").length === 2) {
          const [command, value] = instructionToUpdate.split(" ")
          // Replace inc command with dec
          if (command === "inc") {
            instructions[targetIndex] = `dec ${value}`
          }
          // Replace all other one-argument commands with inc
          else {
            instructions[targetIndex] = `inc ${value}`
          }
          // Toggle two-argument instructions
        } else if (instructionToUpdate.split(" ").length === 3) {
          const [command, ...values] = instructionToUpdate.split(" ")
          // Replace jnz command with cpy
          if (command === "jnz") {
            instructions[targetIndex] = `cpy ${values.join(" ")}`
          }
          // Replace all other two-argument commands with jnz
          else {
            instructions[targetIndex] = `jnz ${values.join(" ")}`
          }
        }
      }
    }

    // Move to next instruction if jnz not executed
    if (!hasJumped) {
      i++
    }
  }
}

const part1 = (input, initialState = {}) => {
  const instructions = input.trim().split("\n")
  const registers = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    ...initialState,
  }

  processInstructions(instructions, registers)

  return registers.a
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
