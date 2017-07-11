class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      default_NB = Notebook.new(title: @user.username.capitalize + "'s Notebook", default: true)
      default_NB.author = @user
      default_NB.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    @user.update(user_params)
    render 'api/users/show'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :image)
  end

end
