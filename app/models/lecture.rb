# == Schema Information
#
# Table name: lectures
#
#  id          :integer          not null, primary key
#  topic       :string
#  semester    :string
#  week        :integer
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  date        :date
#

class Lecture < ActiveRecord::Base
	has_one :assignment
end
