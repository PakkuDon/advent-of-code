const initialiseBoss = (input) => {
  const boss = {}

  const [hp, damage, armor] = input
    .trim()
    .split("\n")
    .map((row) => Number(row.match(/\d+/)))
  boss.hp = hp
  boss.damage = damage
  boss.armor = armor

  return boss
}

// Return all potential combinations of equips player can have
const getPotentialEquipmentSets = () => {
  const equipmentSets = []
  // Item stats taken from puzzle description
  const itemShop = {
    weapons: [
      {
        name: "Dagger",
        cost: 8,
        damage: 4,
        armor: 0,
      },
      {
        name: "Shortsword",
        cost: 10,
        damage: 5,
        armor: 0,
      },
      {
        name: "Warhammer",
        cost: 25,
        damage: 6,
        armor: 0,
      },
      {
        name: "Longsword",
        cost: 40,
        damage: 7,
        armor: 0,
      },
      {
        name: "Greataxe",
        cost: 74,
        damage: 8,
        armor: 0,
      },
    ],
    armors: [
      // Null armor to model case where we don't buy armor
      {
        name: "None",
        cost: 0,
        damage: 0,
        armor: 0,
      },
      {
        name: "Leather",
        cost: 13,
        damage: 0,
        armor: 1,
      },
      {
        name: "Chainmail",
        cost: 31,
        damage: 0,
        armor: 2,
      },
      {
        name: "Splintmail",
        cost: 53,
        damage: 0,
        armor: 3,
      },
      {
        name: "Bandedmail",
        cost: 75,
        damage: 0,
        armor: 4,
      },
      {
        name: "Platemail",
        cost: 102,
        damage: 0,
        armor: 5,
      },
    ],
    rings: [
      // Null ring to model case where we don't buy any rings
      {
        name: "None",
        cost: 0,
        damage: 0,
        armor: 0,
      },
      {
        name: "Damage +1",
        cost: 25,
        damage: 1,
        armor: 0,
      },
      {
        name: "Damage +2",
        cost: 50,
        damage: 2,
        armor: 0,
      },
      {
        name: "Damage +3",
        cost: 100,
        damage: 3,
        armor: 0,
      },
      {
        name: "Defense +1",
        cost: 20,
        damage: 0,
        armor: 1,
      },
      {
        name: "Defense +2",
        cost: 40,
        damage: 0,
        armor: 2,
      },
      {
        name: "Defense +3",
        cost: 80,
        damage: 0,
        armor: 3,
      },
    ],
  }

  for (let i = 0; i < itemShop.weapons.length; i++) {
    for (let j = 0; j < itemShop.armors.length; j++) {
      for (let k = 0; k < itemShop.rings.length; k++) {
        for (let l = 0; l < itemShop.rings.length; l++) {
          // Skip ring pair as shopkeeper only has one of each item
          // Don't skip None as we can have 0-2 rings
          if (k === l && itemShop.rings.name !== "None") {
            continue
          }

          equipmentSets.push([
            itemShop.weapons[i],
            itemShop.armors[j],
            itemShop.rings[k],
            itemShop.rings[l],
          ])
        }
      }
    }
  }

  return equipmentSets
}

const canPlayerWin = (player, boss) => {
  let playerHp = player.hp
  let bossHp = boss.hp

  let isPlayerTurn = true

  while (playerHp > 0 && bossHp > 0) {
    if (isPlayerTurn) {
      let damage = player.damage - boss.armor
      // Scratch damage
      if (damage <= 0) {
        damage = 1
      }
      bossHp -= damage
    } else {
      let damage = boss.damage - player.armor
      // Scratch damage
      if (damage <= 0) {
        damage = 1
      }
      playerHp -= damage
    }
    // Switch turns
    isPlayerTurn = !isPlayerTurn
  }

  return playerHp > 0
}

const part1 = (input) => {
  // Initialise characters
  const player = {
    hp: 100,
    damage: 0,
    armor: 0,
  }
  const boss = initialiseBoss(input)

  // Simulate battle with different equips to find least amount of gold we can spend to win
  let leastCost = Number.MAX_SAFE_INTEGER
  const equipmentSets = getPotentialEquipmentSets()
  equipmentSets.forEach((equips) => {
    player.damage = equips.reduce((total, item) => total + item.damage, 0)
    player.armor = equips.reduce((total, item) => total + item.armor, 0)
    const cost = equips.reduce((total, item) => total + item.cost, 0)

    if (canPlayerWin(player, boss) && cost < leastCost) {
      leastCost = cost
    }
  })

  return leastCost
}

const part2 = (input) => {
  // Initialise characters
  const player = {
    hp: 100,
    damage: 0,
    armor: 0,
  }
  const boss = initialiseBoss(input)

  // Simulate battle with different equips to find most amount of gold we can spend and still lose
  let maxCost = Number.MIN_SAFE_INTEGER
  const equipmentSets = getPotentialEquipmentSets()
  equipmentSets.forEach((equips) => {
    player.damage = equips.reduce((total, item) => total + item.damage, 0)
    player.armor = equips.reduce((total, item) => total + item.armor, 0)
    const cost = equips.reduce((total, item) => total + item.cost, 0)

    if (!canPlayerWin(player, boss) && cost > maxCost) {
      maxCost = cost
    }
  })

  return maxCost
}

module.exports = {
  part1,
  part2,
}
