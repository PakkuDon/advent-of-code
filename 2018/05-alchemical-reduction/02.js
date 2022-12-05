const alchemicReduction = (polymer) => {
  const uniqueUnits = polymer
    .toLowerCase()
    .split("")
    .reduce((characters, current) => {
      if (!characters.includes(current)) {
        characters.push(current)
      }
      return characters
    }, [])

  const shortestPossiblePolymer = Math.min(
    ...uniqueUnits.map((unit) => {
      const polymerWithoutUnit = polymer.replace(new RegExp(unit, "gi"), "")
      return getReducedPolymerLength(polymerWithoutUnit)
    })
  )

  return shortestPossiblePolymer
}

const getReducedPolymerLength = (polymer) => {
  let units = polymer.split("")
  let finished = false

  while (!finished) {
    const remainingUnits = []
    remainingUnits.push(units[0])

    for (let i = 1; i < units.length; i++) {
      const previous = remainingUnits[remainingUnits.length - 1]
      const current = units[i]
      if (
        previous &&
        isSameCharacter(previous, current) &&
        isOppositePolarity(previous, current)
      ) {
        remainingUnits.pop()
      } else {
        remainingUnits.push(current)
      }
    }

    if (units.length === remainingUnits.length) {
      finished = true
    }

    units = remainingUnits
  }

  return units.length
}

const isSameCharacter = (a, b) => {
  return a.toLowerCase() === b.toLowerCase()
}

const isOppositePolarity = (a, b) => {
  return a !== b
}

module.exports = alchemicReduction
