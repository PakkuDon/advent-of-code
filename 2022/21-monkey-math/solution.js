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

const generateAlgorithm = (monkeys) => {
  let algorithm = monkeys.root
  algorithm = algorithm.replace(/[+-/*]/, " == ")

  while (algorithm.match(/[a-z]{4}/g).length > 1) {
    let tokens = algorithm.match(/[a-z]{4}/g)
    tokens.forEach((token) => {
      algorithm = algorithm.replace(token, (_, match) => {
        if (match !== "humn") {
          return `(${monkeys[token]})`
        }
        return match
      })
    })
  }

  while (algorithm.match(/[()]/)) {
    let startingAlgorithm = algorithm
    // Expand numbers that are wrapped in brackets
    algorithm = algorithm.replace(/\((\-?\d+)\)/, (_, p1) => p1)
    // Evaluate numerical equations
    algorithm = algorithm.replace(/\((\-?\d+ [+-/*] \-?\d+)\)/, (_, p1) =>
      eval(p1)
    )

    if (startingAlgorithm === algorithm) {
      break
    }
  }

  return algorithm
}

const part2 = (rows) => {
  const monkeys = {}

  // Parse input data
  rows.forEach((row) => {
    const [name, algorithm] = row.split(": ")
    let fn
    if (algorithm.match(/\-?\d+/g)) {
      fn = parseInt(algorithm, 10)
    } else {
      fn = algorithm
    }

    monkeys[name] = fn
  })
  // Disregard value from humn
  monkeys["humn"] = "humn"

  let algorithm = generateAlgorithm(monkeys)
  console.log(algorithm)
  let humanValue = 0
  while (!eval(algorithm.replace("humn", humanValue))) {
    humanValue++
  }
  return humanValue
}

module.exports = {
  part1,
  part2,
}
