const processInstructions = (instructions, registers) => {
  let pointer = 0
  while (pointer < instructions.length) {
    let hasJumped = false
    const instruction = instructions[pointer]
    if (instruction.startsWith("hlf")) {
      const register = instruction.split(" ")[1]
      registers[register] /= 2
    } else if (instruction.startsWith("tpl")) {
      const register = instruction.split(" ")[1]
      registers[register] *= 3
    } else if (instruction.startsWith("inc")) {
      const register = instruction.split(" ")[1]
      registers[register]++
    } else if (instruction.startsWith("jmp")) {
      const offset = instruction.split(" ")[1]
      pointer += Number(offset)
      hasJumped = true
    } else if (instruction.startsWith("jie")) {
      const [register, offset] = instruction
        .split(" ")
        .slice(1)
        .join("")
        .split(",")
      if (registers[register] % 2 === 0) {
        pointer += Number(offset)
        hasJumped = true
      }
    } else if (instruction.startsWith("jio")) {
      const [register, offset] = instruction
        .split(" ")
        .slice(1)
        .join("")
        .split(",")
      if (registers[register] === 1) {
        pointer += Number(offset)
        hasJumped = true
      }
    }

    // Increment pointer if jump not executed
    if (!hasJumped) {
      pointer++
    }
  }
}

const part1 = (input, requestedRegister) => {
  const registers = {
    a: 0,
    b: 0,
  }
  const instructions = input.trim().split("\n")

  processInstructions(instructions, registers)

  // Return value from specified register
  return registers[requestedRegister]
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
