// Taken from https://stackoverflow.com/a/64844881
const generateSubsets = (array) => {
  const subsets = [[]]
  for (let i = 0; i < array.length; i++) {
    const length = subsets.length
    for (let j = 0; j < length; j++) {
      subsets.push([...subsets[j], array[i]])
    }
  }
  return subsets
}

const part1 = (input, sum) => {
  const containers = input
    .trim()
    .split("\n")
    .map((value) => Number(value))

  const subsets = generateSubsets(containers)

  // Count combinations that add to given sum
  return subsets.filter(
    (subset) => subset.reduce((total, current) => total + current, 0) === sum
  ).length
}

const part2 = (input, sum) => {
  const containers = input
    .trim()
    .split("\n")
    .map((value) => Number(value))

  const subsets = generateSubsets(containers)

  // Find potential combinations that add to provided sum
  const potentialCombinations = subsets.filter(
    (subset) => subset.reduce((total, current) => total + current, 0) === sum
  )

  // Count number of combinations that use least containers required
  const leastContainersRequired = Math.min(
    ...potentialCombinations.map((combination) => combination.length)
  )
  return potentialCombinations.filter(
    (combination) => combination.length === leastContainersRequired
  ).length
}

module.exports = {
  part1,
  part2,
}
