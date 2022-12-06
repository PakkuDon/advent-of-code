const part1 = (datastream) => {
  for (let i = 3; i < datastream.length; i++) {
    let set = new Set()
    let substr = datastream.substring(i - 3, i + 1)
    substr.split('').forEach(char => {
      set.add(char)
    })
    if (set.size === 4) {
      return i + 1
    }
  }
  return 0
}

const part2 = (datastream) => {
  for (let i = 13; i < datastream.length; i++) {
    let set = new Set()
    let substr = datastream.substring(i - 13, i + 1)
    substr.split('').forEach(char => {
      set.add(char)
    })
    if (set.size === 14) {
      return i + 1
    }
  }
  return 0
}

module.exports = {
  part1,
  part2,
}
