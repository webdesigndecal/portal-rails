# == Schema Information
#
# Table name: attendances
#
#  id           :integer          not null, primary key
#  had_attended :boolean
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Attendance < ActiveRecord::Base
  belongs_to :lecture
  belongs_to :user
end
