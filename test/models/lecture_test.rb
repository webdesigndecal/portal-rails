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

require 'test_helper'

class LectureTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
