const part1 = (input) => {
  const histories = input
    .trim()
    .split("\n")
    .map((row) => row.match(/-?\d+/g).map((value) => parseInt(value, 10)))
  const extrapolatedValues = []

  histories.forEach((history) => {
    const sequences = []
    let sequence = [...history]
    sequences.push(sequence)

    // Generate differences until we reach zero set
    while (sequence.some((value) => value !== 0)) {
      let differences = []
      for (let i = 1; i < sequence.length; i++) {
        differences.push(sequence[i] - sequence[i - 1])
      }
      sequences.push(differences)
      sequence = [...differences]
    }

    // Append zero to last sequence
    sequences[sequences.length - 1].push(0)

    // Extrapolate next values for each sequence
    for (let i = sequences.length - 2; i >= 0; i--) {
      const previous = sequences[i + 1]
      const current = sequences[i]
      const extrapolatedValue =
        current[current.length - 1] + previous[previous.length - 1]
      current.push(extrapolatedValue)
      if (i === 0) {
        extrapolatedValues.push(extrapolatedValue)
      }
    }
  })

  return extrapolatedValues.reduce((total, current) => total + current, 0)
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
