class Part < ApplicationRecord
  has_many :media, class_name: "Medium"
  composed_of :offset, mapping: { offset_x: :x, offset_y: :y, offset_z: :z }, allow_nil: true
end
