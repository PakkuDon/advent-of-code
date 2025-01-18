const generateSubsets = (array) => {
  const subsets = [[]]
  for (let i = 0; i < array.length; i++) {
    const length = subsets.length
    for (let j = 0; j < length; j++) {
      // Hack - Restrict subset length to avoid JavaScript heap out of memory error
      // as we know package group for final answer has to be short
      if (subsets[j].length < array.length / 4) {
        subsets.push([...subsets[j], array[i]])
      }
    }
  }

  // .slice(1) to remove empty set
  return subsets.slice(1)
}

const part1 = (input) => {
  // Parse input
  const packages = input
    .trim()
    .split("\n")
    .map((value) => Number(value))
  const targetWeight = packages.reduce((total, weight) => total + weight, 0) / 3

  // Find potential configurations where each package group has same weight
  const groups = generateSubsets(packages)
  const possibleGroups = groups.filter(
    (group) =>
      group.reduce((total, weight) => total + weight, 0) === targetWeight
  )

  // Find group that uses least required packages
  const minRequiredPackages = Math.min(
    ...possibleGroups.map((group) => group.length)
  )

  // Return smallest quantum entanglement from groups with fewest packages
  const matchingGroups = possibleGroups.filter(
    (group) => group.length === minRequiredPackages
  )
  return Math.min(
    ...matchingGroups.map((group) =>
      group.reduce((total, current) => total * current, 1)
    )
  )
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
