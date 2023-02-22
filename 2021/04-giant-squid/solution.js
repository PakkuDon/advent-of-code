const hasHorizontalWin = (board) => {
  for (let row of board) {
    if (row.every((cell) => cell === "x")) {
      return true
    }
  }
  return false
}

const hasVerticalWin = (board) => {
  for (let x = 0; x < board.length; x++) {
    if (
      [board[0][x], board[1][x], board[2][x], board[3][x], board[4][x]].every(
        (cell) => cell === "x"
      )
    ) {
      return true
    }
  }
  return false
}

const part1 = (input) => {
  // Parse input
  const [callInput, ...boardInput] = input.split("\n\n")
  const calls = callInput
    .trim()
    .split(",")
    .map((value) => Number(value))
  const boards = boardInput.map((boardString) => {
    const rows = boardString.split("\n")
    return rows.map((row) => row.split(/\s+/).map((value) => Number(value)))
  })

  // Find winning board
  let winningBoard
  let lastCall
  for (let call of calls) {
    // Mark cell and check if board wins
    for (let board of boards) {
      for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
          if (board[y][x] === call) {
            board[y][x] = "x"
            break
          }
        }
      }

      if (hasHorizontalWin(board) || hasVerticalWin(board)) {
        lastCall = call
        winningBoard = board
        break
      }
    }
    if (winningBoard) {
      break
    }
  }

  // Calculate sum of winning board
  let sumOfUnmarkedCells = 0
  for (let row of winningBoard) {
    for (let cell of row) {
      if (cell !== "x") {
        sumOfUnmarkedCells += cell
      }
    }
  }
  return sumOfUnmarkedCells * lastCall
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
