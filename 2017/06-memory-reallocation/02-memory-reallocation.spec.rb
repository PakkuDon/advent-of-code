require_relative "./02-memory-reallocation"

describe MemoryReallocation do
  describe ".call" do
    it "counts number of cycles between repeated sequence" do
      memory_banks = [0, 2, 7, 0]
      expect(MemoryReallocation.call(memory_banks)).to eq(4)
    end
  end
end
