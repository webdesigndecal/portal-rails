class AddDateToLecture < ActiveRecord::Migration
  def change
  		add_column :lectures, :date,  :date
  end
end
