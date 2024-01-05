const getSeatIds = (boardingPasses) =>
  boardingPasses.map((pass) => {
    const rowInput = pass.substring(0, 7)
    const seatInput = pass.substring(7)

    const row = processBinaryPartition(rowInput, 0, 127)
    const column = processBinaryPartition(seatInput, 0, 7)

    return row * 8 + column
  })

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
  const seatIds = getSeatIds(boardingPasses)
  return Math.max(...seatIds)
}

const part2 = (input) => {
  const boardingPasses = input.trim().split("\n")
  const seatIds = getSeatIds(boardingPasses)
  seatIds.sort((a, b) => a - b)

  // Find missing seat ID
  for (let i = 1; i < seatIds.length; i++) {
    if (seatIds[i] - seatIds[i - 1] > 1) {
      return seatIds[i] - 1
    }
  }
}

module.exports = {
  part1,
  part2,
}
