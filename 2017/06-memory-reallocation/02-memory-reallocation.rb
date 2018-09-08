class MemoryReallocation
  class << self
    def call(memory_banks)
      steps = []
      memory_banks = memory_banks.dup

      while last_entry_is_unique?(steps) do
        blocks = memory_banks.max
        current_position = memory_banks.index(blocks)

        memory_banks[current_position] = 0
        current_position = increment_with_wrap(current_position, memory_banks)

        blocks.times do
          memory_banks[current_position] += 1
          current_position = increment_with_wrap(current_position, memory_banks)
        end

        steps << memory_banks.dup
      end

      steps.length - steps.index(steps.last) - 1
    end

    def increment_with_wrap(current_position, memory_banks)
      return 0 if current_position + 1 >= memory_banks.length
      current_position + 1
    end

    def last_entry_is_unique?(steps)
      steps.index(steps.last) === steps.rindex(steps.last)
    end
  end
end
