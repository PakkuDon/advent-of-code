class MemoryReallocation
  class << self
    def call(memory_banks)
      cycles = 0
      steps = []
      memory_banks = memory_banks.dup

      while steps.length === steps.uniq.length do
        blocks = memory_banks.max
        current_position = memory_banks.index(blocks)

        memory_banks[current_position] = 0
        current_position = increment_with_wrap(current_position, memory_banks)
        cycles += 1

        blocks.times do
          memory_banks[current_position] += 1
          current_position = increment_with_wrap(current_position, memory_banks)
        end

        steps << memory_banks.dup
      end

      cycles
    end

    def increment_with_wrap(current_position, memory_banks)
      return 0 if current_position + 1 >= memory_banks.length
      current_position + 1
    end
  end
end
