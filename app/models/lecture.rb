# == Schema Information
#
# Table name: lectures
#
#  id                 :integer          not null, primary key
#  prog_topic         :string
#  semester           :string
#  week               :integer
#  prog_description   :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  date               :date
#  design_topic       :string
#  design_description :text
#

class Lecture < ActiveRecord::Base
	has_one :assignment
end
