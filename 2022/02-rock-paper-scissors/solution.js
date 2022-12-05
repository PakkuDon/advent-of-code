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

const part1 = (moves) => {
  let score = 0

  moves.forEach(move => {
    const opponentMove = opponentMoveMap[move[0]]
    const yourMove = yourMoveMap[move[1]]
    score += calculateScoreForFound(opponentMove, yourMove)
  })

  return score
}

const part2 = (moves) => {
  let score = 0

  moves.forEach(move => {
    const opponentMove = opponentMoveMap[move[0]]
    const result = resultForRound[move[1]]
    const moveForRound = chooseMoveForRound(opponentMove, result)
    score += scoreForResult[result] + moveScores[moveForRound]
  })

  return score
}

module.exports = {
  part1,
  part2,
}
