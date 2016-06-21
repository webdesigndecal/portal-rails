class CreateSubmissions < ActiveRecord::Migration
  def change
    create_table :submissions do |t|
      t.datetime :submit_time
      t.decimal :score
      t.integer :assigned_staff_id
      t.text :feedback

      t.timestamps null: false
    end
  end
end
