const parseGameDetails = (input) =>
  input.split("\n").map((gameDetails) => {
    const [idInput, roundInput] = gameDetails.split(":")
    const id = parseInt(idInput.match(/\d+/), 10)
    const rounds = roundInput
      .trim()
      .split(";")
      .map((round) => {
        const pulls = { red: 0, green: 0, blue: 0 }
        const moves = round.trim().split(",")
        moves.forEach((move) => {
          let [number, colour] = move.trim().split(" ")
          number = parseInt(number, 10)
          pulls[colour] += number
        })
        return pulls
      })

    return { id, rounds }
  })

const part1 = (input) => {
  const settings = { red: 12, green: 13, blue: 14 }
  const games = parseGameDetails(input)

  return games
    .filter((game) =>
      game.rounds.every((round) =>
        Object.keys(round).every((colour) => round[colour] <= settings[colour])
      )
    )
    .reduce((total, current) => total + current.id, 0)
}

const part2 = (input) => {
  const games = parseGameDetails(input)

  const requiredCubeColours = games.map((game) => {
    const requiredGreens = Math.max(...game.rounds.map((round) => round.green))
    const requiredBlues = Math.max(...game.rounds.map((round) => round.blue))
    const requiredReds = Math.max(...game.rounds.map((round) => round.red))

    return {
      requiredGreens,
      requiredBlues,
      requiredReds,
    }
  })

  const powers = requiredCubeColours.map(
    ({ requiredGreens, requiredBlues, requiredReds }) =>
      requiredGreens * requiredBlues * requiredReds
  )
  return powers.reduce((total, current) => total + current)
}

module.exports = {
  part1,
  part2,
}
