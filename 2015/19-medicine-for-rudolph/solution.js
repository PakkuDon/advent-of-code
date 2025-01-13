const part1 = (input) => {
  // Parse input
  const [replacementInput, medicineMolecule] = input.trim().split("\n\n")
  const replacements = {}
  replacementInput.split("\n").forEach((row) => {
    const [key, value] = row.split(" => ")
    if (!replacements[key]) {
      replacements[key] = []
    }
    replacements[key].push(value)
  })

  // Perform replacements on medicine molecule and record distinct results
  const molecules = new Set()
  for (let key in replacements) {
    for (let replacement of replacements[key]) {
      // Use String#matchAll to get match groups as these include index
      const matchGroups = [...medicineMolecule.matchAll(new RegExp(key, "g"))]

      matchGroups.forEach((matchGroup) => {
        // Replace specific instance of substring and record new string
        const newString = `${medicineMolecule.substring(
          0,
          matchGroup.index
        )}${replacement}${medicineMolecule.substring(
          matchGroup.index + key.length
        )}`
        molecules.add(newString)
      })
    }
  }

  return molecules.size
}

const part2 = (input) => {
  console.log(
    "Part 2 Note: This solution is non-deterministic. Results may vary"
  )

  // Parse input
  const [replacementInput, medicineMolecule] = input.trim().split("\n\n")
  const replacements = {}
  // Flip replacement map as we will be reducing medicine molecule to e
  replacementInput.split("\n").forEach((row) => {
    const [key, value] = row.split(" => ")
    replacements[value] = key
  })

  let steps = 0
  let molecule = medicineMolecule
  let substrings = Object.keys(replacements)

  while (molecule !== "e") {
    // If no further replacements can be made,
    // reshuffle replacement order and start over
    if (!substrings.some((substring) => molecule.includes(substring))) {
      molecule = medicineMolecule
      steps = 0

      for (let i = 0; i < substrings.length; i++) {
        const randomIndex = Math.floor(Math.random() * substrings.length)
        const [a, b] = [substrings[i], substrings[randomIndex]]
        substrings[i] = b
        substrings[randomIndex] = a
      }
    }

    for (let substring of substrings) {
      const occurrences = (molecule.match(new RegExp(substring, "g")) || [])
        .length

      molecule = molecule.replaceAll(substring, replacements[substring])
      steps += occurrences
    }
  }

  return steps
}

module.exports = {
  part1,
  part2,
}
