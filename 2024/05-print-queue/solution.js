const isValidPageUpdate = (pageUpdate, pageOrderingRules) => {
  for (let i = 0; i < pageUpdate.length; i++) {
    const pageNo = pageUpdate[i]

    // Check that current page is pageUpdate is after all pages specified in rules
    const afterPage = pageOrderingRules
      .filter((rule) => pageUpdate.includes(rule[0]) && rule[1] === pageNo)
      .map((rule) => rule[0])
    if (
      !afterPage.every((otherPage) => {
        return pageUpdate.indexOf(pageNo) > pageUpdate.indexOf(otherPage)
      })
    ) {
      return false
    }

    // Check that current page is pageUpdate is before all pages specified in rules
    const beforePage = pageOrderingRules
      .filter((rule) => pageUpdate.includes(rule[1]) && rule[0] === pageNo)
      .map((rule) => rule[1])
    if (
      !beforePage.every((otherPage) => {
        return pageUpdate.indexOf(pageNo) < pageUpdate.indexOf(otherPage)
      })
    ) {
      return false
    }
  }
  return true
}

const part1 = (input) => {
  const [pageOrderingRulesInput, pageUpdatesInput] = input.trim().split("\n\n")
  const pageOrderingRules = pageOrderingRulesInput
    .split("\n")
    .map((row) => row.split("|").map((value) => parseInt(value, 10)))
  const pageUpdates = pageUpdatesInput
    .split("\n")
    .map((row) => row.split(",").map((value) => parseInt(value, 10)))

  const validPageUpdates = pageUpdates.filter((pageUpdate) =>
    isValidPageUpdate(pageUpdate, pageOrderingRules)
  )

  return validPageUpdates.reduce((total, pageUpdate) => {
    const middle = pageUpdate[Math.floor(pageUpdate.length / 2)]
    return total + middle
  }, 0)
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
