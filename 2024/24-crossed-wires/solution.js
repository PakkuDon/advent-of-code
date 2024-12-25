const parseInput = (input) => {
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

  return wires
}

const calculateNumbersOnWires = (wires, prefix) => {
  const matchingWires = Object.keys(wires)
    .filter((key) => key.startsWith(prefix))
    .sort()
    .reverse()
  let numbers = matchingWires.map((key) => wires[key]())

  // Return decimal number
  return parseInt(numbers.join(""), 2)
}

const part1 = (input) => {
  const wires = parseInput(input)
  return calculateNumbersOnWires(wires, "z")
}

const part2 = (input) => {
  console.log(
    "Note: This was solved manually by putting plotting gates in GraphViz and looking for entanglements. Exiting"
  )
  return
}

module.exports = {
  part1,
  part2,
}
