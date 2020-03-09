require_relative "./01-corruption-checksum"

describe "corruption-checksum" do
  it "calculates checksum as sum of differences between min and max values per row" do
    data = [
      [5, 1, 9, 5],
      [7, 5, 3],
      [2, 4, 6, 8],
    ]
    expected_sum = 18

    actual_sum = CorruptionChecksum.call(data)
    expect(expected_sum).to eq(actual_sum)
  end
end
