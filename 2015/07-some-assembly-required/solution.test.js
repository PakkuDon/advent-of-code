const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("calculates resulting signals from instructions", () => {
    const input = `123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i`

    expect(part1(input, "d")).toEqual(72)
    expect(part1(input, "e")).toEqual(507)
    expect(part1(input, "f")).toEqual(492)
    expect(part1(input, "g")).toEqual(114)
    expect(part1(input, "h")).toEqual(65412)
    expect(part1(input, "i")).toEqual(65079)
    expect(part1(input, "x")).toEqual(123)
    expect(part1(input, "y")).toEqual(456)
  })

  test("resolves direct signal to wire", () => {
    const input = "5 -> lx"

    expect(part1(input, "lx")).toEqual(5)
  })

  test("resolves signals when result stored in other wire", () => {
    const input = `123 -> lx
lx -> a`

    expect(part1(input, "a")).toEqual(123)
  })

  test("resolves signals when result stored in other wire and other wire is processed later", () => {
    const input = `lx -> a
123 -> lx`

    expect(part1(input, "a")).toEqual(123)
  })

  test("resolves signals when wire has nested operations", () => {
    const input = `lx -> a
lw OR lv -> lx
12 -> lw
13 -> lv`

    expect(part1(input, "a")).toEqual(13)
  })

  test("only writes to wires once", () => {
    const input = `10 -> a
15 -> a`

    expect(part1(input, "a")).toEqual(10)
  })
})

describe("part2", () => {
  xtest("no example output provided", () => {})
})
