const MAX_VALUE = 65535

const resolve = (signals, key) => {
  if (!isNaN(key)) {
    return key
  } else if (isNaN(signals[key])) {
    signals[key] = signals[key]()
    return signals[key]
  }
  return signals[key]
}

const calculateSignal = (instructions, target, initialSignals = {}) => {
  let signals = Object.assign({}, initialSignals)

  for (let instruction of instructions) {
    const [_, input, key] = instruction.match(/([\w\s]+)\ -> (\w+)/)

    if (signals[key]) {
      continue
    }

    const tokens = input.split(" ")
    if (tokens.length === 1) {
      signals[key] = () =>
        isNaN(tokens[0]) ? resolve(signals, tokens[0]) : parseInt(tokens[0], 10)
    } else if (tokens.length === 2) {
      signals[key] = () => MAX_VALUE - resolve(signals, tokens[1])
    } else if (tokens.length === 3) {
      const [_, operandA, operator, operandB] = input.match(/(\w+) (\w+) (\w+)/)
      if (operator === "AND") {
        signals[key] = () =>
          resolve(signals, operandA) & resolve(signals, operandB)
      } else if (operator === "OR") {
        signals[key] = () =>
          resolve(signals, operandA) | resolve(signals, operandB)
      } else if (operator === "LSHIFT") {
        let shift = parseInt(operandB)
        signals[key] = () => resolve(signals, operandA) << shift
      } else if (operator === "RSHIFT") {
        let shift = parseInt(operandB)
        signals[key] = () => resolve(signals, operandA) >> shift
      } else {
        throw new Error(`Invalid operator. Received ${operator}`)
      }
    }
  }

  return resolve(signals, target)
}

module.exports = calculateSignal
