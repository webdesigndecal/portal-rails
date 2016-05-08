class AddLectureRefToAssignments < ActiveRecord::Migration
  def change
    add_reference :assignments, :lecture, index: true, foreign_key: true
  end
end
