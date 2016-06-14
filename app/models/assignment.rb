# == Schema Information
#
# Table name: assignments
#
#  id         :integer          not null, primary key
#  name       :string
#  points     :integer
#  due_date   :datetime
#  semester   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  lecture_id :integer
#

class Assignment < ActiveRecord::Base
	belongs_to :lecture
end
