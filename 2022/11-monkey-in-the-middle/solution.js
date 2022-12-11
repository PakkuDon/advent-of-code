const part1 = (input) => {
  const initialMonkeyState = input.split("\n\n")
  const monkeys = []

  initialMonkeyState.forEach((data) => {
    const rows = data.split("\n")
    const items = rows[1].match(/\d+/g).map((value) => parseInt(value, 10))
    const operation = eval(`(old) => ${rows[2].split("= ")[1]}`)
    const divisor = parseInt(rows[3].match(/\d+/)[0], 10)
    const test = (value) => value % divisor === 0
    const destinationOnTrue = parseInt(rows[4].match(/\d+/)[0], 10)
    const destinationOnFalse = parseInt(rows[5].match(/\d+/)[0], 10)

    monkeys.push({
      items,
      operation,
      test,
      destinationOnTrue,
      destinationOnFalse,
      inspectionCount: 0,
    })
  })

  for (let round = 0; round < 20; round++) {
    monkeys.forEach((monkey) => {
      monkey.items.forEach((item) => {
        let updatedItem = monkey.operation(item)
        updatedItem = Math.floor(updatedItem / 3)
        let destination
        if (monkey.test(updatedItem)) {
          destination = monkey.destinationOnTrue
        } else {
          destination = monkey.destinationOnFalse
        }

        monkeys[destination].items.push(updatedItem)
        monkey.inspectionCount++
      })

      // Reset items as all items have been distributed to other monkeys
      monkey.items = []
    })
  }

  const monkeysSortedByInspectCount = monkeys.sort((a, b) => {
    if (a.inspectionCount > b.inspectionCount) {
      return -1
    }
    return 1
  })

  return monkeysSortedByInspectCount
    .slice(0, 2)
    .map((monkey) => monkey.inspectionCount)
    .reduce((total, current) => total * current)
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
