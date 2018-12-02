class InventoryManagementSystem
  def self.call(box_ids)
    has_character_twice = 0
    has_character_thrice = 0

    box_ids.each do |box_id|
      counts = character_counts(box_id).values

      has_character_twice += 1 if counts.include?(2)
      has_character_thrice += 1 if counts.include?(3)
    end

    has_character_twice * has_character_thrice
  end

  def self.character_counts(string)
    Hash.new(0).tap do |counts|
      string.chars do |char|
        counts[char] += 1
      end
    end
  end
end
