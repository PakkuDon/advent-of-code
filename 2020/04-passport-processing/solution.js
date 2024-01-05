const part1 = (input) => {
  const passportData = input.trim().split("\n\n")

  // Return number of valid passports
  // cid is not required for part 1
  const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
  return passportData
    .map((data) => data.match(/\w+:/g).map((key) => key.replace(":", "")))
    .filter((fields) => requiredFields.every((field) => fields.includes(field)))
    .length
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
