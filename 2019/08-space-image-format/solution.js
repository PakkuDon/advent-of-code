const part1 = (input, width, height) => {
  // Partition input into layers
  const layers = []
  const layerSize = width * height
  for (let i = 0; i < input.length; i += layerSize) {
    layers.push(input.slice(i, i + layerSize))
  }

  // Find layer with least zero digits
  const layerWithLeastZeros = layers.toSorted((a, b) =>
    (a.match(/0/g) || []).length > (b.match(/0/g) || []).length ? 1 : -1
  )[0]

  // Calculate number of 1s by number of 2s in layer
  const numberOf1s = (layerWithLeastZeros.match(/1/g) || []).length
  const numberOf2s = (layerWithLeastZeros.match(/2/g) || []).length

  return numberOf1s * numberOf2s
}

const part2 = (input, width, height) => {
  // Partition input into layers
  const layers = []
  const layerSize = width * height
  for (let i = 0; i < input.length; i += layerSize) {
    layers.push(input.slice(i, i + layerSize))
  }

  // Find pixels that make up final image
  const finalLayers = []
  for (let i = 0; i < layers[0].length; i++) {
    // Loop until non-transparent pixel found
    for (let j = 0; j < layers.length; j++) {
      if (layers[j][i] !== "2") {
        finalLayers.push(layers[j][i])
        break
      }
    }
  }

  // Construct final message from layers
  let result = ""
  for (let i = 0; i < finalLayers.length; i += width) {
    result += finalLayers.slice(i, i + width).join("") + "\n"
  }
  return result.trim()
}

module.exports = {
  part1,
  part2,
}
