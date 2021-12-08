const productOfFinalDepthAndDistanceWithAim = require('./02')

describe('productOfFinalDepthAndDistanceWithAim', () => {
  test("returns product of submarine's depth, height and aim after directions", () => {
    const input = [
        "forward 5",
        "down 5",
        "forward 8",
        "up 3",
        "down 8",
        "forward 2",
    ]
    expect(productOfFinalDepthAndDistanceWithAim(input)).toEqual(900)
  })
})
