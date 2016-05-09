module Api
	class LecturesController < Api::BaseController

		def index
			@lectures = Lecture.all
			render json: @lectures, each_serializer: LectureSerializer, root: false
		end

	end
end