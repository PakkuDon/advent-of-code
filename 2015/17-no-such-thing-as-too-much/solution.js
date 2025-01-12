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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
