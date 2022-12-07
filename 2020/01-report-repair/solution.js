const part1 = (values) => {
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (i === j) {
        continue
      }

      if (values[i] + values[j] === 2020) {
        return values[i] * values[j]
      }
    }
  }
}

const part2 = (values) => {
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length; j++) {
      for (let k = 0; k < values.length; k++) {
        if (i === j || j === k || i === k) {
          continue
        }

        if (values[i] + values[j] + values[k] === 2020) {
          return values[i] * values[j] * values[k]
        }
      }
    }
  }
}

module.exports = {
  part1,
  part2,
}
