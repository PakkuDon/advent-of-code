const part1 = (input) => {
  const reports = input.split("\n").map(value => value.split(/\s/).map(cell => parseInt(cell, 10)))

  const safeReports = reports.filter(report => {
    // Reject reports that are not either all ascending or all descending
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
  })
  return safeReports.length
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
