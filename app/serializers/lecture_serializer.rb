class LectureSerializer < ActiveModel::Serializer
  attributes :id, :topic, :semester, :week, :description, :date
  has_one :assignment

  def assignment
    object.assignment
  end
end
