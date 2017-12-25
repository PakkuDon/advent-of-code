class CorruptionChecksum
  class << self
    def call(spreadsheet)
      spreadsheet
        .map { |row| get_divisible_numbers(row) }
        .reduce(0) { |sum, pair| sum + pair.first / pair.last }
    end

    def get_divisible_numbers(array)
      array.each do |n|
        array.each do |m|
          next if n == m
          return [n, m] if n % m == 0
        end
      end
    end
  end
end
