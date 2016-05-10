class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :points, :due_date, :semester

  def lecture
    object.lecture
  end
end