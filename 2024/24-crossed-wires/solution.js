const part1 = (input) => {
  // Parse input
  const [wireInput, gatesInput] = input.trim().split("\n\n")
  const wires = {}

  // Set initial value for wires
  wireInput.split("\n").forEach((wire) => {
    const [key, value] = wire.split(": ")
    wires[key] = () => Number(value)
  })

  // Set functions for gates configured in gatesInput
  gatesInput.split("\n").forEach((gate) => {
    const [a, operand, b, _, target] = gate.split(" ")

    switch (operand) {
      case "AND":
        wires[target] = () => wires[a]() & wires[b]()
        break
      case "OR":
        wires[target] = () => wires[a]() | wires[b]()
        break
      case "XOR":
        wires[target] = () => wires[a]() ^ wires[b]()
        break
    }
  })

  // Process all z wires to construct binary number
  const zWires = Object.keys(wires)
    .filter((key) => key.startsWith("z"))
    .sort()
    .reverse()
  let numbers = zWires.map((key) => wires[key]())

  // Return decimal number
  return parseInt(numbers.join(""), 2)
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
