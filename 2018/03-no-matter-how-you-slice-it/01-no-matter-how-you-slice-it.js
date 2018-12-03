const claimProcessor = (claims) => {
  const width = Math.max(...claims.map(claim => claim.x + claim.width))
  const height = Math.max(...claims.map(claim => claim.y + claim.height))

  const tiles = []
  for (let x = 0; x < width; x++) {
    tiles.push([])
    for (let y = 0; y < height; y++) {
      tiles[x].push(0)
    }
  }

  claims.forEach(claim => {
    for (let x = claim.x; x < claim.x + claim.width; x++) {
      for (let y = claim.y; y < claim.y + claim.height; y++) {
        tiles[x][y]++
      }
    }
  })

  let countTilesWithMoreThanTwoClaims = 0
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (tiles[x][y] >= 2) {
        countTilesWithMoreThanTwoClaims++
      }
    }
  }

  return countTilesWithMoreThanTwoClaims
}

module.exports = claimProcessor
