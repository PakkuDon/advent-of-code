const part1 = (rucksacks) => {
  let sum = 0
  const sharedItemTypes = []
  
  rucksacks.forEach(rucksack => {
    let compartments = []
    const midway = rucksack.length / 2
    compartments.push(rucksack.slice(0, midway))
    compartments.push(rucksack.slice(midway))

    for (let i = 0; i < compartments[0].length; i++) {
      let itemType = compartments[0][i]
      if (compartments[1].includes(itemType)) {
        sharedItemTypes.push(itemType)
        break
      }
    }
  })

  sharedItemTypes.forEach(itemType => {
    if (itemType === itemType.toLowerCase()) {
      sum += itemType.charCodeAt(0) - "a".charCodeAt(0) + 1
    } else {
      sum += itemType.charCodeAt(0) - "A".charCodeAt(0) + 27
    }
  })

  return sum
}

const part2 = (rucksacks) => {
  let sum = 0
  const sharedItemTypes = []
  const groupedRucksacks = []

  for (let i = 0; i < rucksacks.length; i += 3) {
    groupedRucksacks.push(rucksacks.slice(i, i + 3))
  }

  groupedRucksacks.forEach(group => {
    let foundSharedItem = false
    for (let i = 0; i < group.length; i++) {
      let rucksack = group[i]
      for (let j = 0; j < rucksack.length; j++) {
        let itemType = rucksack[j]
        if (group[0].includes(itemType) && group[1].includes(itemType) && group[2].includes(itemType)) {
          sharedItemTypes.push(itemType)
          foundSharedItem = true
          break
        }
      }

      if (foundSharedItem) {
        break
      }
    }
  })

  sharedItemTypes.forEach(itemType => {
    if (itemType === itemType.toLowerCase()) {
      sum += itemType.charCodeAt(0) - "a".charCodeAt(0) + 1
    } else {
      sum += itemType.charCodeAt(0) - "A".charCodeAt(0) + 27
    }
  })

  return sum
}

module.exports = {
  part1,
  part2,
}
