class FixLectureColumnName < ActiveRecord::Migration
  def change
    rename_column :lectures, :topic, :prog_topic
    rename_column :lectures, :description, :prog_description
  end
end
