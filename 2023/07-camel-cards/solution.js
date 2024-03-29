const getTallyForHand = (hand) => {
  const tally = {}
  hand.split("").forEach((character) => {
    if (tally[character]) {
      tally[character]++
    } else {
      tally[character] = 1
    }
  })
  return tally
}

const getType = (tally) => {
  const tallyValues = Object.values(tally)
  let type = ""
  if (tallyValues.some((value) => value === 5)) {
    type = "fiveOfAKind"
  } else if (tallyValues.some((value) => value === 4)) {
    type = "fourOfAKind"
  } else if (
    tallyValues.length === 2 &&
    [2, 3].every((value) => tallyValues.includes(value))
  ) {
    type = "fullHouse"
  } else if (tallyValues.some((value) => value === 3)) {
    type = "threeOfAKind"
  } else if (tallyValues.filter((value) => value === 2).length === 2) {
    type = "twoPair"
  } else if (tallyValues.filter((value) => value === 2).length === 1) {
    type = "onePair"
  } else if (tallyValues.length === 5) {
    type = "highCard"
  }
  return type
}

const part1 = (input) => {
  const cardsByStrength = [
    "A",
    "K",
    "Q",
    "J",
    "T",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ]
  const handsByStrength = [
    "fiveOfAKind",
    "fourOfAKind",
    "fullHouse",
    "threeOfAKind",
    "twoPair",
    "onePair",
    "highCard",
  ]

  // Parse input
  const hands = input
    .trim()
    .split("\n")
    .map((row) => {
      const [hand, bid] = row.trim().split(/\s+/)
      const tally = getTallyForHand(hand)
      const type = getType(tally)

      return {
        hand,
        bid: parseInt(bid, 10),
        rankIndex: handsByStrength.findIndex((value) => value === type) + 1,
      }
    })

  // Sort hands by strength (lowest to highest)
  hands.sort((a, b) => {
    if (b.rankIndex === a.rankIndex) {
      for (let i = 0; i < a.hand.length; i++) {
        if (a.hand[i] === b.hand[i]) {
          continue
        } else {
          const aCardStrength = cardsByStrength.findIndex(
            (value) => value === a.hand[i]
          )
          const bCardStrength = cardsByStrength.findIndex(
            (value) => value === b.hand[i]
          )
          return bCardStrength - aCardStrength
        }
      }
    } else {
      return b.rankIndex - a.rankIndex
    }
  })

  return hands.reduce(
    (total, current, index) => total + (index + 1) * current.bid,
    0
  )
}

const part2 = (input) => {
  const cardsByStrength = [
    "A",
    "K",
    "Q",
    "T",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "J",
  ]
  const handsByStrength = [
    "fiveOfAKind",
    "fourOfAKind",
    "fullHouse",
    "threeOfAKind",
    "twoPair",
    "onePair",
    "highCard",
  ]

  // Parse input
  const hands = input
    .trim()
    .split("\n")
    .map((row) => {
      const [hand, bid] = row.trim().split(/\s+/)
      const tally = getTallyForHand(hand)
      const jokerCount = tally["J"] || 0
      // Add joker count to most common card type
      delete tally["J"]
      const mostCommon = Object.keys(tally).find(
        (key) => tally[key] === Math.max(...Object.values(tally))
      )
      // Handle case where card only contains jokers
      if (!mostCommon) {
        tally["J"] = jokerCount
      } else {
        tally[mostCommon] += jokerCount
      }
      const type = getType(tally)

      return {
        hand,
        bid: parseInt(bid, 10),
        rankIndex: handsByStrength.findIndex((value) => value === type) + 1,
        type,
      }
    })

  // Sort hands by strength (lowest to highest)
  hands.sort((a, b) => {
    if (b.rankIndex === a.rankIndex) {
      for (let i = 0; i < a.hand.length; i++) {
        if (a.hand[i] === b.hand[i]) {
          continue
        } else {
          const aCardStrength = cardsByStrength.findIndex(
            (value) => value === a.hand[i]
          )
          const bCardStrength = cardsByStrength.findIndex(
            (value) => value === b.hand[i]
          )
          return bCardStrength - aCardStrength
        }
      }
    } else {
      return b.rankIndex - a.rankIndex
    }
  })

  hands.forEach((hand) => {
    console.log(hand)
  })

  return hands.reduce(
    (total, current, index) => total + (index + 1) * current.bid,
    0
  )
}

module.exports = {
  part1,
  part2,
}
