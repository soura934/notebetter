class Api::Notes < ApplicationController

  def index 
    @notes = Note.all
    render :index
  end

  def show
    @note = Note.find(params[:id])
    render :show
  end

  def create
    @note = Note.new(valid_params)
    @note.save
    if @note
      render :show
    else
      render .full_messages

  end

  def update
  end

  def destroy
  end

  def valid_params
    params.require(:note).permit(:title, :body)
  end
end
