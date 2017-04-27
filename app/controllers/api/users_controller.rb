class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      defaultNB = Notebook.new({title: @user.username.capitalize + "'s Notebook", default: true})
      defaultNB.author = @user
      defaultNB.save

      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
