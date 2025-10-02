class Part < ApplicationRecord
  has_many :media, class_name: "Medium"
  composed_of :offset, class_name: "Point", mapping: { offset_x: :x, offset_y: :y, offset_z: :z }

  validates :offset, presence: :true
end
