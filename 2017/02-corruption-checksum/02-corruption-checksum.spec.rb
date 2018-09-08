require "./02-corruption-checksum"

describe "corruption-checksum" do
  it "calculates checksum as sum of divisions between divisible pairs" do
    data = [
      [5, 9, 2, 8],
      [9, 4, 7, 3],
      [3, 8, 6, 5],
    ]
    expected_sum = 9

    actual_sum = CorruptionChecksum.call(data)
    expect(actual_sum).to eq(expected_sum)
  end
end
