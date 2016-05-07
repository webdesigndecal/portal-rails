class AddStaffBooleanToUsers < ActiveRecord::Migration
  def change
    add_column :users, :staff, :boolean
  end
end
