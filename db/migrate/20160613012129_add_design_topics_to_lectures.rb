class AddDesignTopicsToLectures < ActiveRecord::Migration
  def change
    add_column :lectures, :design_topic, :string
    add_column :lectures, :design_description, :text
  end
end
