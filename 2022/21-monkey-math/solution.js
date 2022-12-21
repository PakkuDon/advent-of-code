const evaluateMonkey = (monkeys, name) => {
  return monkeys[name]()
}

const part1 = (rows) => {
  const monkeys = {}

  // Parse input data
  rows.forEach((row) => {
    const [name, algorithm] = row.split(": ")
    let fn
    if (algorithm.match(/\-?\d+/g)) {
      fn = () => parseInt(algorithm, 10)
    } else {
      const [_, a, operand, b] = algorithm.match(/([a-z]+) ([+-/*]) ([a-z]+)/)
      fn = eval(`() => monkeys["${a}"]() ${operand} monkeys["${b}"]()`)
    }

    monkeys[name] = fn
  })

  return evaluateMonkey(monkeys, "root")
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
