const opponentMoveMap = {
  "A": "rock",
  "B": "paper",
  "C": "scissors",
}
const resultForRound = {
  "X": "lose",
  "Y": "draw",
  "Z": "win",
}
const scoreForResult = {
  "lose": 0,
  "draw": 3,
  "win": 6,
}
const moveScores = {
  "rock": 1,
  "paper": 2,
  "scissors": 3,
}

const chooseMoveForRound = (opponentMove, result) => {
  if (result === "draw") {
    return opponentMove
  }
  if (result === "win") {
    switch (opponentMove) {
      case "rock":
        return "paper"
      case "scissors":
        return "rock"
      case "paper":
        return "scissors"
    }
  }
  else if (result === "lose") {
    switch (opponentMove) {
      case "rock":
        return "scissors"
      case "scissors":
        return "paper"
      case "paper":
        return "rock"
    }
  }
}

module.exports = (moves) => {
  let score = 0

  moves.forEach(move => {
    const opponentMove = opponentMoveMap[move[0]]
    const result = resultForRound[move[1]]
    const moveForRound = chooseMoveForRound(opponentMove, result)
    score += scoreForResult[result] + moveScores[moveForRound]
  })

  return score
}


