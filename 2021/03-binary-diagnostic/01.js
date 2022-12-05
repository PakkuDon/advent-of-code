const calculatePowerConsumption = (input) => {
  const matrix = []
  const bits = input[0].length
  let gammaBits = ""
  let epsilonBits = ""

  for (let i = 0; i < bits; i++) {
    let zeroCount = 0
    let oneCount = 0
    for (let j = 0; j < input.length; j++) {
      if (input[j][i] === "0") {
        zeroCount++
      } else {
        oneCount++
      }
    }

    if (zeroCount > oneCount) {
      gammaBits += "0"
      epsilonBits += "1"
    } else {
      gammaBits += "1"
      epsilonBits += "0"
    }
  }

  return parseInt(gammaBits, 2) * parseInt(epsilonBits, 2)
}

module.exports = calculatePowerConsumption
