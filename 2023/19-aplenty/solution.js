const part1 = (input) => {
  // Parse input
  const [ruleInput, partInput] = input.trim().split("\n\n")
  const rules = {}

  const parts = partInput.split("\n").map((row) => {
    let x, m, a, s
    eval(row)
    return { x, m, a, s }
  })
  ruleInput.split("\n").forEach((row) => {
    const [ruleId, segments] = row.split(/[{}]/)
    rules[ruleId] = []

    segments.split(",").forEach((segment) => {
      // If segment is a truth check, parse formula
      if (segment.includes(":")) {
        const equation = segment.split(":")
        rules[ruleId].push((gear) =>
          eval(`gear.${equation[0]} ? "${equation[1]}" : ""`)
        )
      }
      // Else return segment
      else {
        rules[ruleId].push(() => segment)
      }
    })
  })

  // Determine which parts are accepted
  const acceptedParts = []
  parts.forEach((part) => {
    let result = "in"
    while (!(result === "A" || result === "R")) {
      // Iterate over rules until non-null response received
      for (let i = 0; i < rules[result].length; i++) {
        let resultFromRule = rules[result][i](part)
        if (resultFromRule) {
          result = resultFromRule
          break
        }
      }
    }
    if (result === "A") {
      acceptedParts.push(part)
    }
  })

  return acceptedParts.reduce(
    (total, current) => total + current.x + current.m + current.a + current.s,
    0
  )
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
