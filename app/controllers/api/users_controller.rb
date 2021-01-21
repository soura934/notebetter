class Api::UsersController < ApplicationController
    def create 
        @user = User.new(valid_params) 

        if @user.save
            login(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end

    end

    def valid_params
        params.require(:user).permit(:email, :password)
    end
end
