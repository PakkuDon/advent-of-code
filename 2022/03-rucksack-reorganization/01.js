module.exports = (rucksacks) => {
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
