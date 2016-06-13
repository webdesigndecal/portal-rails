class LectureSerializer < ActiveModel::Serializer
  attributes :id, :prog_topic, :design_topic, :semester, :week, :prog_description, :design_description, :date
  has_one :assignment

  def assignment
    object.assignment
  end
end
