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

require 'test_helper'

class AssignmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
