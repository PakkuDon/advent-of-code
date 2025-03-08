const parseInput = (input) =>
  input
    .trim()
    .split("\n")
    // Remove command and df header
    .slice(2)
    .map((row) => {
      const [name, size, used, available] = row.split(/\s+/)
      return {
        name,
        size: Number(size.match(/\d+/)),
        used: Number(used.match(/\d+/)),
        available: Number(available.match(/\d+/)),
      }
    })

const part1 = (input) => {
  const nodes = parseInput(input)

  // Get viable pairs
  // Pair is viable if
  // - nodes are different
  // - a is not empty
  // - a fits in available space on b
  const pairs = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) {
        continue
      }

      const [a, b] = [nodes[i], nodes[j]]
      if (a.used > 0 && a.used <= b.available) {
        pairs.push([a, b])
      }
    }
  }

  return pairs.length
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
