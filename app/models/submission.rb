# == Schema Information
#
# Table name: submissions
#
#  id                :integer          not null, primary key
#  submit_time       :datetime
#  score             :decimal(, )
#  assigned_staff_id :integer
#  feedback          :text
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Submission < ActiveRecord::Base
  belongs_to :lecture
  belongs_to :user
end
