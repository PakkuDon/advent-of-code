const productOfFinalDepthAndDistance = require('./01')

describe('productOfFinalDepthAndDistance', () => {
  test("returns product of submarine's depth and height after directions", () => {
    const input = [
        "forward 5",
        "down 5",
        "forward 8",
        "up 3",
        "down 8",
        "forward 2",
    ]
    expect(productOfFinalDepthAndDistance(input)).toEqual(150)
  })
})
