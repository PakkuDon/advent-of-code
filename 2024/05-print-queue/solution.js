const isValidPageUpdate = (pageUpdate, pageOrderingRules) => {
  const pagesPrecedingPageNo = {}
  pageOrderingRules.forEach((rule) => {
    if (!pagesPrecedingPageNo[rule[0]]) {
      pagesPrecedingPageNo[rule[0]] = []
    }
    pagesPrecedingPageNo[rule[0]].push(rule[1])
  })

  for (let i = 0; i < pageUpdate.length; i++) {
    const pageNo = pageUpdate[i]

    // Check that current page is before all pages specified in rules
    if (pagesPrecedingPageNo[pageNo]) {
      if (
        pagesPrecedingPageNo[pageNo].some(
          (otherPage) =>
            pageUpdate.includes(otherPage) && i > pageUpdate.indexOf(otherPage)
        )
      ) {
        return false
      }
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

const part2 = (input) => {
  const [pageOrderingRulesInput, pageUpdatesInput] = input.trim().split("\n\n")
  const pageOrderingRules = pageOrderingRulesInput
    .split("\n")
    .map((row) => row.split("|").map((value) => parseInt(value, 10)))
  const pageUpdates = pageUpdatesInput
    .split("\n")
    .map((row) => row.split(",").map((value) => parseInt(value, 10)))

  const invalidPageUpdates = pageUpdates.filter(
    (pageUpdate) => !isValidPageUpdate(pageUpdate, pageOrderingRules)
  )

  // Map out which pages have to come before other pages
  const beforePages = {}
  pageOrderingRules.forEach((rule) => {
    if (!beforePages[rule[0]]) {
      beforePages[rule[0]] = []
    }
    beforePages[rule[0]].push(rule[1])
  })

  // Sort page updates by page rules
  const fixedPageUpdates = invalidPageUpdates.map((pageUpdate) => {
    return pageUpdate.toSorted((a, b) => {
      if (beforePages[a] && beforePages[a].includes(b)) {
        return -1
      } else {
        return 1
      }
    })
  })

  return fixedPageUpdates.reduce((total, pageUpdate) => {
    const middle = pageUpdate[Math.floor(pageUpdate.length / 2)]
    return total + middle
  }, 0)
}

module.exports = {
  part1,
  part2,
}
