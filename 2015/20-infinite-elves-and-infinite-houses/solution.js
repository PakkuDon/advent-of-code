const part1 = (input) => {
  const requiredPresents = Number(input)
  let houseNo = 1

  while (true) {
    let presents = 0
    for (let i = 1; i <= houseNo; i++) {
      if (houseNo % i === 0) {
        presents += i * 10
      }
    }

    if (presents >= requiredPresents) {
      break
    }
    houseNo++
  }

  return houseNo
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
