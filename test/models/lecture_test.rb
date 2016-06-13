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

require 'test_helper'

class LectureTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
