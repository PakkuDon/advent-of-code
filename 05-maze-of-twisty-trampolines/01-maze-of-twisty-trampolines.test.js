const TwistyTrampolines = require("./01-maze-of-twisty-trampolines")

describe("TwistyTrampolines", () => {
  describe(".call", () => {
    test("it calculates number of steps required to reach the end", () => {
      const instructions = [0, 3, 0, 1, -3]
      expect(TwistyTrampolines.call(instructions)).toBe(5)
    })
  })
})
