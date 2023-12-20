const part1 = (input) => {
  // Parse input
  const nodes = {}
  input
    .trim()
    .split("\n")
    .forEach((row) => {
      const [nameInput, targetInput] = row
        .split("->")
        .map((value) => value.trim())
      const type = nameInput.match(/^[%&]/) ? nameInput[0] : ""
      const name = nameInput.match(/^[%&]/) ? nameInput.substring(1) : nameInput
      const targets = targetInput.split(", ")

      nodes[name] = { name, targets, type }
      if (type === "%") {
        nodes[name].isOn = false
      } else if (type === "&") {
        nodes[name].inputState = {}
      }

      // Initialise target nodes in graph to ensure that non-input nodes (eg: output) no-op
      targets.forEach((target) => {
        if (!nodes[target]) {
          nodes[target] = { targets: [] }
        }
      })
    })

  // Set input nodes for all conjunction (&) nodes
  Object.keys(nodes)
    .filter((key) => nodes[key].type === "&")
    .forEach((key) => {
      const inputNodes = Object.keys(nodes).filter((otherKey) =>
        nodes[otherKey].targets.some((target) => target === key)
      )
      inputNodes.forEach((otherKey) => {
        nodes[key].inputState[otherKey] = "low"
      })
    })

  let lowPulses = 0
  let highPulses = 0
  const buttonPresses = 1000

  for (let i = 0; i < buttonPresses; i++) {
    const pulses = []
    // Initial button press sends low pulse to broadcaster node
    pulses.push({ origin: "", target: "broadcaster", type: "low" })

    // Process each pulse in FIFO order
    while (pulses.length > 0) {
      const pulse = pulses.shift()
      if (pulse.type === "low") {
        lowPulses++
      } else {
        highPulses++
      }
      // Process pulse on target node given target properties and pulse type
      const currentNode = nodes[pulse.target]
      let pulseTypeToSend
      if (currentNode.type === "%") {
        // Flip-flop module always switches state. Pulse type is determined by its current state
        if (pulse.type === "low") {
          pulseTypeToSend = currentNode.isOn ? "low" : "high"
          currentNode.isOn = !currentNode.isOn
        }
        // If flip-flop module receives high pulse do nothing
        else {
          continue
        }
      } else if (currentNode.type === "&") {
        // Update remembered state for conjunction node
        currentNode.inputState[pulse.origin] = pulse.type
        // Pulse type for conjunction node is based on state of input nodes
        if (
          Object.values(currentNode.inputState).every(
            (value) => value === "high"
          )
        ) {
          pulseTypeToSend = "low"
        } else {
          pulseTypeToSend = "high"
        }
      }
      // Default case for non-typed nodes
      else {
        pulseTypeToSend = "low"
      }

      // Queue pulses to current node's target nodes
      currentNode.targets.forEach((target) => {
        pulses.push({
          origin: currentNode.name,
          target: target,
          type: pulseTypeToSend,
        })
      })
    }
  }

  return lowPulses * highPulses
}

const findGreatestCommonDivisor = (a, b) => {
  if (a > 0) {
    return findGreatestCommonDivisor(b % a, a)
  }
  return b
}

const findLeastCommonMultiple = (a, b) =>
  (a * b) / findGreatestCommonDivisor(a, b)

const part2 = (input) => {
  // Parse input
  const nodes = {}
  input
    .trim()
    .split("\n")
    .forEach((row) => {
      const [nameInput, targetInput] = row
        .split("->")
        .map((value) => value.trim())
      const type = nameInput.match(/^[%&]/) ? nameInput[0] : ""
      const name = nameInput.match(/^[%&]/) ? nameInput.substring(1) : nameInput
      const targets = targetInput.split(", ")

      nodes[name] = { name, targets, type }
      if (type === "%") {
        nodes[name].isOn = false
      } else if (type === "&") {
        nodes[name].inputState = {}
      }

      // Initialise target nodes in graph to ensure that non-input nodes (eg: output) no-op
      targets.forEach((target) => {
        if (!nodes[target]) {
          nodes[target] = { targets: [] }
        }
      })
    })

  // Set input nodes for all conjunction (&) nodes
  Object.keys(nodes)
    .filter((key) => nodes[key].type === "&")
    .forEach((key) => {
      const inputNodes = Object.keys(nodes).filter((otherKey) =>
        nodes[otherKey].targets.some((target) => target === key)
      )
      inputNodes.forEach((otherKey) => {
        nodes[key].inputState[otherKey] = "low"
      })
    })

  // Find parent node for rx, then that node's parents
  const parentNode = Object.keys(nodes).find((key) =>
    nodes[key].targets.includes("rx")
  )
  const ancestorNodes = Object.keys(nodes).filter((key) =>
    nodes[key].targets.includes(parentNode)
  )
  const cycleLengthsForAncestors = {}
  let buttonPresses = 0

  // Find how many cycles it takes for each ancestor to emit a high pulse
  while (Object.keys(cycleLengthsForAncestors).length < ancestorNodes.length) {
    buttonPresses++
    const pulses = []
    // Initial button press sends low pulse to broadcaster node
    pulses.push({ origin: "", target: "broadcaster", type: "low" })

    // Process each pulse in FIFO order
    while (pulses.length > 0) {
      const pulse = pulses.shift()
      if (pulse.target === "rx" && pulse.type === "low") {
        break
      }

      // Process pulse on target node given target properties and pulse type
      const currentNode = nodes[pulse.target]
      let pulseTypeToSend
      if (currentNode.type === "%") {
        // Flip-flop module always switches state. Pulse type is determined by its current state
        if (pulse.type === "low") {
          pulseTypeToSend = currentNode.isOn ? "low" : "high"
          currentNode.isOn = !currentNode.isOn
        }
        // If flip-flop module receives high pulse do nothing
        else {
          continue
        }
      } else if (currentNode.type === "&") {
        // Update remembered state for conjunction node
        currentNode.inputState[pulse.origin] = pulse.type
        // Pulse type for conjunction node is based on state of input nodes
        if (
          Object.values(currentNode.inputState).every(
            (value) => value === "high"
          )
        ) {
          pulseTypeToSend = "low"
        } else {
          if (
            ancestorNodes.includes(currentNode.name) &&
            !cycleLengthsForAncestors[currentNode.name]
          ) {
            cycleLengthsForAncestors[currentNode.name] = buttonPresses
          }
          pulseTypeToSend = "high"
        }
      }
      // Default case for non-typed nodes
      else {
        pulseTypeToSend = "low"
      }

      // Queue pulses to current node's target nodes
      currentNode.targets.forEach((target) => {
        pulses.push({
          origin: currentNode.name,
          target: target,
          type: pulseTypeToSend,
        })
      })
    }
  }

  // Find least common multiple to find point at which all ancestors emit high pulse
  return Object.values(cycleLengthsForAncestors).reduce(findLeastCommonMultiple)
}

module.exports = {
  part1,
  part2,
}
