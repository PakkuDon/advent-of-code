const parseInput = (input) => {
  const guests = {}
  input
    .trim()
    .split("\n")
    .forEach((row) => {
      const [_, guest, action, happiness, otherGuest] = row.match(
        /(\w+) would (\w+) (\d+) happiness units by sitting next to (\w+)/
      )

      if (!guests[guest]) {
        guests[guest] = {}
      }
      if (action === "gain") {
        guests[guest][otherGuest] = Number(happiness)
      } else {
        guests[guest][otherGuest] = -Number(happiness)
      }
    })

  return guests
}

// From https://rosettacode.org/wiki/Permutations#JavaScript
const generatePermutations = (list) => {
  if (list.length < 2) {
    return [list]
  }
  const permutations = []
  for (let i = 0; i < list.length; i++) {
    const element = list.splice(i, 1)[0]
    const subsequence = generatePermutations(list)

    for (let j = 0; j < subsequence.length; j++) {
      permutations.push([element, ...subsequence[j]])
    }
    list.splice(i, 0, element)
  }

  return permutations
}

const findOptimalHappiness = (guests) => {
  // Find highest possible happiness given possible arrangements
  const possibleArrangements = generatePermutations(Object.keys(guests))
  let optimalHappiness = Number.MIN_SAFE_INTEGER
  possibleArrangements.forEach((arrangement) => {
    let happiness = 0

    for (let i = 0; i < arrangement.length; i++) {
      const current = arrangement[i]
      // Loop around as guests are seated at circular table
      let left
      let right
      if (i > 0) {
        left = arrangement[i - 1]
      } else {
        left = arrangement[arrangement.length - 1]
      }

      if (i < arrangement.length - 1) {
        right = arrangement[i + 1]
      } else {
        right = arrangement[0]
      }

      happiness += guests[current][left] + guests[current][right]
    }

    if (happiness > optimalHappiness) {
      optimalHappiness = happiness
    }
  })

  return optimalHappiness
}

const part1 = (input) => {
  const guests = parseInput(input)
  return findOptimalHappiness(guests)
}

const part2 = (input) => {
  const guests = parseInput(input)

  // Add ourselves to guest list
  // Guests' happiness is not affected by us, and ours is not impacted by seating arrangement
  guests["You"] = {}
  Object.keys(guests)
    .filter((key) => key !== "You")
    .forEach((guest) => {
      guests["You"][guest] = 0
      guests[guest]["You"] = 0
    })

  return findOptimalHappiness(guests)
}

module.exports = {
  part1,
  part2,
}
