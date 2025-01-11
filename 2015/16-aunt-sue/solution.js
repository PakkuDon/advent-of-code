const parseInput = (input) => {
  return input
    .trim()
    .split("\n")
    .map((row) => {
      const items = row.replace(/Sue \d+: /, "").split(", ")
      const aunt = {}

      items.forEach((item) => {
        const [name, amount] = item.split(": ")
        aunt[name] = Number(amount)
      })

      return aunt
    })
}

const part1 = (input) => {
  // Message from puzzle description
  const tickerTape = {
    children: 3,
    cats: 7,
    samoyeds: 2,
    pomeranians: 3,
    akitas: 0,
    vizslas: 0,
    goldfish: 5,
    trees: 3,
    cars: 2,
    perfumes: 1,
  }

  const aunts = parseInput(input)

  // Find aunt with gift matching amounts in ticker tape
  const index = aunts.findIndex((aunt) =>
    Object.keys(aunt).every((item) => aunt[item] === tickerTape[item])
  )
  // +1 as aunt input starts from 1
  return index + 1
}

const part2 = (input) => {
  // Message from puzzle description
  const tickerTape = {
    children: 3,
    cats: 7,
    samoyeds: 2,
    pomeranians: 3,
    akitas: 0,
    vizslas: 0,
    goldfish: 5,
    trees: 3,
    cars: 2,
    perfumes: 1,
  }

  const aunts = parseInput(input)

  // Find aunt with gift matching ranges or amounts in ticker tape
  const index = aunts.findIndex((aunt) =>
    Object.keys(aunt).every((item) => {
      if (item === "cats" || item === "trees") {
        return aunt[item] > tickerTape[item]
      }
      if (item === "pomeranians" || item === "goldfish") {
        return aunt[item] < tickerTape[item]
      }
      return aunt[item] === tickerTape[item]
    })
  )
  // +1 as aunt input starts from 1
  return index + 1
}

module.exports = {
  part1,
  part2,
}
