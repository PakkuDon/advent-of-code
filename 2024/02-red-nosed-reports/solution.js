const isSafeReport = (report) => {
  if (
    report.toSorted((a, b) => (a < b ? -1 : 1)).join(",") !==
      report.join(",") &&
    report.toSorted((a, b) => (a < b ? 1 : -1)).join(",") !== report.join(",")
  ) {
    return false
  }

  for (let i = 1; i < report.length; i++) {
    const difference = Math.abs(report[i] - report[i - 1])
    if (difference < 1 || difference > 3) {
      return false
    }
  }

  return true
}

const part1 = (input) => {
  const reports = input
    .split("\n")
    .map((value) => value.split(/\s/).map((cell) => parseInt(cell, 10)))
  return reports.filter(isSafeReport).length
}

const part2 = (input) => {
  const reports = input
    .split("\n")
    .map((value) => value.split(/\s/).map((cell) => parseInt(cell, 10)))

  const safeReports = reports.filter((report) => {
    if (isSafeReport(report)) {
      return true
    }

    for (let i = 0; i < report.length; i++) {
      if (isSafeReport([...report.slice(0, i), ...report.slice(i + 1)])) {
        return true
      }
    }
    return false
  })
  return safeReports.length
}

module.exports = {
  part1,
  part2,
}
