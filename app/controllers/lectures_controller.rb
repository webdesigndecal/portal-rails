class LecturesController < ApplicationController
	before_action :authenticate_user!

	def index
		@lectures = Lecture.all
	end
end
