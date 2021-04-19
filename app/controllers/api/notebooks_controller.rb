class Api::NotebooksController < ApplicationController
    before_action :ensure_logged_in?

    def index
       
        @notebooks = current_user.notebooks
        render :index
    end

    def show
        @notebook = Notebook.find(params[:id])
  
        render :show
    end

    def create

        @notebook = Notebook.new(valid_params)

        
        if @notebook.save
            render :show
        else
            render json: @notebook.errors.full_messages, status: 422
        end
        
    end

    def update
        @notebook = Notebook.find(params[:id])
        if @notebook.update(valid_params)
          render :show
        else
          render json: @notebook.errors.full_messages, status: 422
        end
      end

      def destroy
        @notebook = Notebook.find(params[:id])

        if @notebook.destroy
            render :show
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def valid_params
        params.require(:notebook).permit(:title, :user_id)
    end
end