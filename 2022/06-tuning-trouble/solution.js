const getIndexOfFirstUniqueSequence = (datastream, sequenceLength) => {
  for (let i = sequenceLength - 1; i < datastream.length; i++) {
    let set = new Set()
    let substr = datastream.substring(i - sequenceLength + 1, i + 1)
    substr.split("").forEach((char) => {
      set.add(char)
    })
    if (set.size === sequenceLength) {
      return i + 1
    }
  }
  return -1
}

const part1 = (datastream) => {
  return getIndexOfFirstUniqueSequence(datastream, 4)
}

const part2 = (datastream) => {
  return getIndexOfFirstUniqueSequence(datastream, 14)
}

module.exports = {
  part1,
  part2,
}
