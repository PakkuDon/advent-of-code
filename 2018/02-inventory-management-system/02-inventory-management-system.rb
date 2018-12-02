class InventoryManagementSystem
  def self.call(box_ids)
    similar_box_ids = get_similar_box_ids(box_ids)
    box_id = similar_box_ids.first
    other_box_id = similar_box_ids.last

    different_character_index = box_id.chars.each_index.select do |n|
      box_id.chars[n] != other_box_id.chars[n]
    end.first

    box_id.slice!(different_character_index)
    box_id
  end

  def self.get_similar_box_ids(box_ids)
    box_ids.each do |box_id|
      box_ids.each do |other_box_id|
        difference = box_id.chars.each_index.select do |index|
          box_id[index] != other_box_id[index]
        end.length

        if difference == 1
          return [box_id, other_box_id]
        end
      end
    end
  end
end
