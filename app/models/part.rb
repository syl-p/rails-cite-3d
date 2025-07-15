class Part < ApplicationRecord
  composed_of :offset, mapping: { offset_x: :x, offset_y: :y, offset_z: :z }, allow_nil: true
end
