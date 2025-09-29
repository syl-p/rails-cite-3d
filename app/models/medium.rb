class Medium < ApplicationRecord
  belongs_to :user
  belongs_to :part
  has_one_attached :file

  def as_json(options = {})
    super(only: [:id, :title, :created_at]).merge(
      file_url: file.attached? ? Rails.application.routes.url_helpers.url_for(file) : nil
    )
  end
end
