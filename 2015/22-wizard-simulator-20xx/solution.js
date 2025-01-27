const spellbook = [
  {
    name: "Magic Missile",
    mana: 53,
    damage: 4,
    armor: 0,
    heal: 0,
  },
  {
    name: "Drain",
    mana: 73,
    damage: 2,
    armor: 0,
    heal: 2,
  },
  {
    name: "Shield",
    mana: 113,
    damage: 0,
    armor: 0,
    heal: 0,
    start: (player, boss) => {
      player.armor = 7
    },
    // No-op so that spell is treated as an effect
    act: (player, boss) => {},
    end: (player, boss) => {
      player.armor = 0
    },
    duration: 6,
  },
  {
    name: "Poison",
    mana: 173,
    damage: 0,
    armor: 0,
    heal: 0,
    start: (player, boss) => {},
    act: (player, boss) => {
      boss.hp -= 3
    },
    end: (player, boss) => {},
    duration: 6,
  },
  {
    name: "Recharge",
    mana: 229,
    damage: 0,
    armor: 0,
    heal: 0,
    start: (player, boss) => {},
    act: (player, boss) => {
      player.mana += 101
    },
    end: (player, boss) => {},
    duration: 5,
  },
]

const initialiseBoss = (input) => {
  const [hp, damage] = input.match(/\d+/gm).map((value) => Number(value))
  return { hp, damage }
}

const getLeastManaRequiredToWin = ({ player, boss, spellbook, effects }) => {
  // Create branches for each possible spell that can be cast
  const stack = []
  spellbook.forEach((spell) => {
    stack.push({
      player,
      boss,
      effects: effects,
      spells: [spell],
    })
  })

  // Find least amount of mana required to defeat boss
  let leastManaRequired = Number.MAX_SAFE_INTEGER
  while (stack.length > 0) {
    const { player, boss, effects, spells } = stack.pop()
    // Clone elements of state so that we can update objects
    // without impacting state stored in other steps
    const nextPlayerState = { ...player }
    const nextBossState = { ...boss }
    let nextEffects = [...effects]

    // Omit last spell in case boss is defeated before spell is cast
    const cost = spells
      .slice(0, -1)
      .reduce((total, spell) => total + spell.mana, 0)

    // Prune long paths
    if (cost > leastManaRequired) {
      continue
    }

    // Process effects at start of player's turn
    nextEffects.forEach((effect) => {
      effect.act(nextPlayerState, nextBossState)
      effect.duration--
      // Run end callback if effect will end
      // This is required for Shield spell
      if (effect.duration === 0) {
        effect.end(nextPlayerState, nextBossState)
      }
    })
    nextEffects = nextEffects.filter((effect) => effect.duration > 0)

    // End path if boss defeated. Record mana used if less than record
    if (nextBossState.hp <= 0) {
      if (cost < leastManaRequired) {
        leastManaRequired = cost
      }
      continue
    }

    // End path if player cannot cast spell
    const spell = spells[spells.length - 1]
    if (nextPlayerState.mana < spell.mana) {
      continue
    }
    if (nextEffects.some((activeEffect) => activeEffect.name === spell.name)) {
      continue
    }

    // Cast spell on player's turn
    nextPlayerState.hp += spell.heal
    nextPlayerState.mana -= spell.mana
    nextBossState.hp -= spell.damage
    // Register effect if spell has an effect
    if (spell.act) {
      spell.start(nextPlayerState, nextBossState)
      // Clone spell as duration will be updated on each turn
      nextEffects.push({ ...spell })
    }

    // Process effects at start of boss' turn
    nextEffects.forEach((effect) => {
      effect.act(nextPlayerState, nextBossState)
      effect.duration--
      // Run end callback if effect will end
      // This is required for Shield spell
      if (effect.duration === 0) {
        effect.end(nextPlayerState, nextBossState)
      }
    })

    // End path if boss defeated. Record mana used if less than record
    if (nextBossState.hp <= 0) {
      if (cost + spell.mana < leastManaRequired) {
        leastManaRequired = cost + spell.mana
      }
      continue
    }

    // Boss' turn
    let bossDamage = boss.damage - nextPlayerState.armor
    // Apply scratch damage
    if (bossDamage <= 0) {
      bossDamage = 1
    }
    nextPlayerState.hp -= bossDamage
    // End path if player defeated
    if (nextPlayerState.hp <= 0) {
      continue
    }

    // Create states for next search
    spellbook.forEach((spell) => {
      const nextState = {
        player: nextPlayerState,
        boss: nextBossState,
        effects: nextEffects
          .filter((effect) => effect.duration > 0)
          .map((effect) => ({ ...effect })),
        spells: [...spells, spell],
      }

      stack.push(nextState)
    })
  }

  return leastManaRequired
}

const part1 = (input, player = { hp: 50, mana: 500, armor: 0 }) => {
  // Initialise players
  const boss = initialiseBoss(input)

  return getLeastManaRequiredToWin({ player, boss, spellbook, effects: [] })
}

const part2 = (input) => {}

module.exports = {
  part1,
  part2,
}
