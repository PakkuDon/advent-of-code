const opponentMoveMap = {
  "A": "rock",
  "B": "paper",
  "C": "scissors",
}
const yourMoveMap = {
  "X": "rock",
  "Y": "paper",
  "Z": "scissors",
}
const moveScores = {
  "rock": 1,
  "paper": 2,
  "scissors": 3,
}

const calculateScoreForFound = (opponentMove, yourMove) => {
  if (opponentMove === yourMove) {
    return 3 + moveScores[yourMove]
  }
  if (opponentMove === "rock") {
    return (yourMove === "paper" ? 6 : 0) + moveScores[yourMove]
  }
  else if (opponentMove === "paper") {
    return (yourMove === "scissors" ? 6 : 0) + moveScores[yourMove]
  }
  else if (opponentMove === "scissors") {
    return (yourMove === "rock" ? 6 : 0) + moveScores[yourMove]
  }
}

module.exports = (moves) => {
  let score = 0

  moves.forEach(move => {
    const opponentMove = opponentMoveMap[move[0]]
    const yourMove = yourMoveMap[move[1]]
    score += calculateScoreForFound(opponentMove, yourMove)
  })

  return score
}


