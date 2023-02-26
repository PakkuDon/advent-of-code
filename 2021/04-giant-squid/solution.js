const parseInput = (input) => {
  const [callInput, ...boardInput] = input.split("\n\n")
  const calls = callInput
    .trim()
    .split(",")
    .map((value) => Number(value))
  const boards = boardInput.map((boardString) => {
    const rows = boardString.split("\n")
    return rows.map((row) =>
      row
        .trim()
        .split(/\s+/)
        .map((value) => Number(value))
    )
  })
  return { calls, boards }
}

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

const sumUnmarkedCells = (board) => {
  let sumOfUnmarkedCells = 0
  for (let row of board) {
    for (let cell of row) {
      if (cell !== "x") {
        sumOfUnmarkedCells += cell
      }
    }
  }
  return sumOfUnmarkedCells
}

const part1 = (input) => {
  const { calls, boards } = parseInput(input)

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

  return sumUnmarkedCells(winningBoard) * lastCall
}

const part2 = (input) => {
  const { calls, boards } = parseInput(input)
  const completedBoardIndices = []
  let lastCall

  for (let call of calls) {
    for (let i = 0; i < boards.length; i++) {
      if (completedBoardIndices.includes(i)) {
        continue
      }
      const board = boards[i]

      // Mark called tile if included in board
      for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
          if (board[y][x] === call) {
            board[y][x] = "x"
            break
          }
        }
      }

      // If board has a bingo, mark as done
      if (hasHorizontalWin(board) || hasVerticalWin(board)) {
        completedBoardIndices.push(i)
      }
    }

    // Exit once all boards have been marked as done
    if (completedBoardIndices.length === boards.length) {
      lastCall = call
      break
    }
  }

  const lastCompletedBoard =
    boards[completedBoardIndices[completedBoardIndices.length - 1]]
  return sumUnmarkedCells(lastCompletedBoard) * lastCall
}

module.exports = {
  part1,
  part2,
}
