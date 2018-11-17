class NotQuiteLisp
  def self.call(input)
    floor = 0
    input.chars.each_with_index do |char, index|
      if char == '('
        floor += 1
      elsif char == ')'
        floor -= 1
      end

      return index + 1 if floor == -1
    end
  end
end
