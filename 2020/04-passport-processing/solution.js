const part1 = (input) => {
  const passportData = input.trim().split("\n\n")

  // Return number of valid passports
  const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
  return passportData
    .map((data) => data.match(/\w+:/g).map((key) => key.replace(":", "")))
    .filter((fields) => requiredFields.every((field) => fields.includes(field)))
    .length
}

const part2 = (input) => {
  // Parse passport data
  const passportData = input.trim().split("\n\n")
  const passports = passportData
    .map((data) =>
      data
        .replace(/[#\w]+/g, (value) => `"${value}"`)
        .split(/\s+/)
        .join(",")
    )
    .map((data) => JSON.parse(`{${data}}`))

  // Return number of valid passports
  const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
  return passports.filter((passport) => {
    if (!requiredFields.every((field) => passport[field])) {
      return false
    }
    if (Number(passport.byr) < 1920 || Number(passport.byr) > 2002) {
      return false
    }
    if (Number(passport.iyr) < 2010 || Number(passport.iyr) > 2020) {
      return false
    }
    if (Number(passport.eyr) < 2020 || Number(passport.eyr) > 2030) {
      return false
    }
    if (!passport.hgt.match(/^\d+(cm)|(in)$/)) {
      return false
    }
    if (passport.hgt.endsWith("cm")) {
      if (
        parseInt(passport.hgt, 10) < 150 ||
        parseInt(passport.hgt, 10) > 193
      ) {
        return false
      }
    } else {
      if (parseInt(passport.hgt, 10) < 59 || parseInt(passport.hgt, 10) > 76) {
        return false
      }
    }
    if (!passport.hcl.match(/^#[a-f0-9]{6}$/)) {
      return false
    }
    if (
      !["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(passport.ecl)
    ) {
      return false
    }
    if (!passport.pid.match(/^\d{9}$/)) {
      return false
    }
    return true
  }).length
}

module.exports = {
  part1,
  part2,
}
