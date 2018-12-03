const claimProcessor = (claims) => {
  const width = Math.max(...claims.map(claim => claim.x + claim.width))
  const height = Math.max(...claims.map(claim => claim.y + claim.height))

  const tiles = []
  for (let x = 0; x < width; x++) {
    tiles.push([])
    for (let y = 0; y < height; y++) {
      tiles[x].push([])
    }
  }

  claims.forEach(claim => {
    for (let x = claim.x; x < claim.x + claim.width; x++) {
      for (let y = claim.y; y < claim.y + claim.height; y++) {
        tiles[x][y].push(claim)
      }
    }
  })

  for (let i = 0; i < claims.length; i++) {
    const claim = claims[i]
    let overlap = false

    for (let x = claim.x; x < claim.x + claim.width; x++) {
      for (let y = claim.y; y < claim.y + claim.height; y++) {
        if (tiles[x][y].length > 1) {
          overlap = true
          break
        }
      }

      if (overlap) {
        break
      }
    }

    if (!overlap) {
      return claim
    }
  }
}

module.exports = claimProcessor
