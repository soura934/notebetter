class Api::Notes < ApplicationController

  def index 
    @notes = Note.all.includes(:user_id)
    render :index
  end

  def show
    @note = Note.find(params[:id])
    render :show
  end

  def create
    @note = Note.new(valid_params)
    @note.user_id = Note.first
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find(params[:id])
    if @note.update(valid_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    render :show
  end

  def valid_params
    params.require(:note).permit(:title, :body)
  end
end
