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

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
