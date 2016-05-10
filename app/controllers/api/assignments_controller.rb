module Api
	class AssignmentsController < Api::BaseController

		def index
			@assignments = Assignment.all
			render json: @assignments, each_serializer: AssignmentSerializer, root: false
		end

		def show
			@assignment = Assignment.find(params[:id])
			render json: @assignment, serializer: AssignmentSerializer, root: false
		end

	end
end