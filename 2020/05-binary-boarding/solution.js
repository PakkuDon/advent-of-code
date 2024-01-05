const processBinaryPartition = (instructions, lowerBound, upperBound) => {
  const range = [lowerBound, upperBound]
  instructions.split("").forEach((char) => {
    const diff = (range[1] - range[0] + 1) / 2
    if (char === "F" || char === "L") {
      range[1] -= diff
    } else {
      range[0] += diff
    }
  })

  return range[0]
}

const part1 = (input) => {
  const boardingPasses = input.trim().split("\n")
  const seatIds = boardingPasses.map((pass) => {
    const rowInput = pass.substring(0, 7)
    const seatInput = pass.substring(7)

    const row = processBinaryPartition(rowInput, 0, 127)
    const column = processBinaryPartition(seatInput, 0, 7)

    return row * 8 + column
  })
  return Math.max(...seatIds)
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
