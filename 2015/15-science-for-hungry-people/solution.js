const parseIngredients = (input) => {
  return input
    .trim()
    .split("\n")
    .map((row) => {
      const properties = row.split(": ")[1]
      const values = properties.match(/-?\d+/g).map((value) => Number(value))

      return {
        capacity: values[0],
        durability: values[1],
        flavor: values[2],
        texture: values[3],
        calories: values[4],
      }
    })
}

const part1 = (input) => {
  const ingredients = parseIngredients(input)

  // Check possible combinations of ingredients that can yield highest score
  let maxScore = Number.MIN_SAFE_INTEGER
  // n-1 number of nested loops where n = number of ingredients
  // Test input uses 2 ingredients. Real input uses 4
  if (ingredients.length === 2) {
    for (let i = 0; i < 100; i++) {
      const j = 100 - i
      const scores = []
      for (let key in ingredients[0]) {
        if (key !== "calories") {
          scores.push(i * ingredients[0][key] + j * ingredients[1][key])
        }
      }

      const score = scores.reduce(
        (total, score) => (score > 0 ? total * score : 0),
        1
      )
      if (score > maxScore) {
        maxScore = score
      }
    }
  } else {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        for (let k = 0; k < 100; k++) {
          const l = 100 - i - j - k
          if (l < 0) {
            continue
          }

          const scores = []
          for (let key in ingredients[0]) {
            if (key !== "calories") {
              scores.push(
                i * ingredients[0][key] +
                  j * ingredients[1][key] +
                  k * ingredients[2][key] +
                  l * ingredients[3][key]
              )
            }
          }

          const score = scores.reduce(
            (total, score) => (score > 0 ? total * score : 0),
            1
          )
          if (score > maxScore) {
            maxScore = score
          }
        }
      }
    }
  }

  return maxScore
}

const part2 = (input) => {
  const ingredients = parseIngredients(input)

  // Check possible combinations of ingredients that can yield highest score
  let maxScore = Number.MIN_SAFE_INTEGER
  // n-1 number of nested loops where n = number of ingredients
  // Test input uses 2 ingredients. Real input uses 4
  if (ingredients.length === 2) {
    for (let i = 0; i < 100; i++) {
      const j = 100 - i
      const calories = i * ingredients[0].calories + j * ingredients[1].calories
      if (calories === 500) {
        const scores = []
        for (let key in ingredients[0]) {
          if (key !== "calories") {
            scores.push(i * ingredients[0][key] + j * ingredients[1][key])
          }
        }

        const score = scores.reduce(
          (total, score) => (score > 0 ? total * score : 0),
          1
        )
        if (score > maxScore) {
          maxScore = score
        }
      }
    }
  } else {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        for (let k = 0; k < 100; k++) {
          const l = 100 - i - j - k
          if (l < 0) {
            continue
          }

          const calories =
            i * ingredients[0].calories +
            j * ingredients[1].calories +
            k * ingredients[2].calories +
            l * ingredients[3].calories
          if (calories === 500) {
            const scores = []
            for (let key in ingredients[0]) {
              if (key !== "calories") {
                scores.push(
                  i * ingredients[0][key] +
                    j * ingredients[1][key] +
                    k * ingredients[2][key] +
                    l * ingredients[3][key]
                )
              }
            }

            const score = scores.reduce(
              (total, score) => (score > 0 ? total * score : 0),
              1
            )
            if (score > maxScore) {
              maxScore = score
            }
          }
        }
      }
    }
  }

  return maxScore
}

module.exports = {
  part1,
  part2,
}
