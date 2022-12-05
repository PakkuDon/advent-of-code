const part1 = (input) => {
  const crateInput = input.substring(0, input.indexOf(" 1") - 1)
  const stackString = input.substring(input.lastIndexOf(']') + 1, input.indexOf('move'))
  const stacks = stackString.match(/\d/g).map(_ => [])
  const matrix = crateInput.split('\n')
  const instructions = input.substring(input.indexOf('move')).trim().split('\n')
  
  for (let j = matrix.length - 1; j >= 0; j--) {
    for (let i = 0; i < stacks.length; i++) {
      let cell = matrix[j][i * 4 + 1]
      if (cell.trim()) {
        stacks[i].push(cell)
      }
    }
  }

  instructions.forEach(instruction => {
    let [unitsToMove, source, destination] = instruction.match(/\d+/g)
    source = source - 1
    destination = destination - 1
    for (let i = 0; i < unitsToMove; i++) {
      stacks[destination].push(stacks[source].pop())
    }
  })

  return stacks.map(stack => stack[stack.length - 1]).join('')
}

const part2 = (input) => {
}

module.exports = {
  part1,
  part2,
}
