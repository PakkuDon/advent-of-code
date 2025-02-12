const processInstructions = (instructions, registers) => {
  let i = 0

  while (i < instructions.length) {
    const instruction = instructions[i]
    let hasJumped = false

    // cpy - Copy value to specified register
    if (instruction.startsWith("cpy")) {
      const [_, value, target] = instruction.split(" ")
      // If value is not a number copy value from register
      if (isNaN(value)) {
        registers[target] = registers[value]
      } else {
        registers[target] = Number(value)
      }
    }
    // inc - Increment value in target register
    else if (instruction.startsWith("inc")) {
      const [_, target] = instruction.split(" ")
      registers[target]++
    }
    // dec - Decrement value in target register
    else if (instruction.startsWith("dec")) {
      const [_, target] = instruction.split(" ")
      registers[target]--
    }

    // jnz - Jump to specified instruction if target value is not zero
    if (instruction.startsWith("jnz")) {
      const [_, target, offset] = instruction.split(" ")
      let value
      // If value is not a number use value from register
      if (isNaN(target)) {
        value = registers[target]
      } else {
        value = Number(target)
      }

      if (value !== 0) {
        i += Number(offset)
        hasJumped = true
      }
    }

    // Move to next instruction if jnz not executed
    if (!hasJumped) {
      i++
    }
  }
}

const part1 = (input) => {
  const instructions = input.trim().split("\n")
  const registers = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
  }

  processInstructions(instructions, registers)

  return registers.a
}

const part2 = (input) => {
  const instructions = input.trim().split("\n")
  const registers = {
    a: 0,
    b: 0,
    c: 1,
    d: 0,
  }

  processInstructions(instructions, registers)

  return registers.a
}

module.exports = {
  part1,
  part2,
}
