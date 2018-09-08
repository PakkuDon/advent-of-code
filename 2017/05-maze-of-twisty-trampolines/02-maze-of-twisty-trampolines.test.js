const TwistyTrampolines = require("./02-maze-of-twisty-trampolines")

describe("TwistyTrampolines", () => {
  describe(".call", () => {
    test("it calculates number of steps required to reach the end", () => {
      const instructions = [0, 3, 0, 1, -3]
      expect(TwistyTrampolines.call(instructions)).toBe(10)
    })
  })

  describe(".getIncrement", () => {
    test("when given a value greater than or equal to three it returns -1", () => {
      expect(TwistyTrampolines.getIncrement(3)).toBe(-1)
    })

    test("when given a value less than three it returns 1", () => {
      expect(TwistyTrampolines.getIncrement(2)).toBe(1)
    })
  })
})
