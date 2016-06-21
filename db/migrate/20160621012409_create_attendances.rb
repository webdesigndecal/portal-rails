class CreateAttendances < ActiveRecord::Migration
  def change
    create_table :attendances do |t|
      t.boolean :had_attended
      t.datetime :created_at

      t.timestamps null: false
    end
  end
end
