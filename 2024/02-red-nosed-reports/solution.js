const isSafeReport = (report) => {
  if (report.toSorted((a, b) => a < b ? -1 : 1).join(",") !== report.join(",")
    && report.toSorted((a, b) => a < b ? 1 : -1).join(",") !== report.join(",")) {
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
  const reports = input.split("\n").map(value => value.split(/\s/).map(cell => parseInt(cell, 10)))
  return reports.filter(isSafeReport).length
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
