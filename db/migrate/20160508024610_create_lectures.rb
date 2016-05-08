class CreateLectures < ActiveRecord::Migration
  def change
    create_table :lectures do |t|
      t.string :topic
      t.string :semester
      t.integer :week
      t.string :description

      t.timestamps null: false
    end
  end
end
