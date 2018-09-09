class NotQuiteLisp
  def self.call(input)
    floor = 0
    input.chars do |char|
      if char == '('
        floor += 1
      elsif char == ')'
        floor -= 1
      end
    end

    floor
  end
end
