require "./01-memory-reallocation"

describe MemoryReallocation do
  describe ".call" do
    it "counts number of cycles until it repeats a sequence" do
      memory_banks = [0, 2, 7, 0]
      expect(MemoryReallocation.call(memory_banks)).to eq(5)
    end
  end
end
