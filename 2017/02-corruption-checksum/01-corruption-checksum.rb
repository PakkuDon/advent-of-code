class CorruptionChecksum
  class << self
    def call(spreadsheet)
      spreadsheet.reduce(0) { |sum, row| sum + row.max - row.min }
    end
  end
end
