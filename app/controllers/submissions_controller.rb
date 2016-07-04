class SubmissionsController < ApplicationController
  # GET /assignments/1
  # GET /assignments/1.json
  def show
  	@submission = Submission.where(:id => params[:id]).first
  end

  def update
        s = Submission.where(id: 1).first
        s.update_attribute :file, params[:submission][:file]
        s.save!
  	redirect_to :back
  end

  def edit
  end

  # Never trust parameters from the scary internet, only allow the white list through.
    def submissions_params
      params.permit(:file)
    end

end
