class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all.where(author_id: current_user.id)
    render :index
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private

  def tag_params
    params.require(:tag).permit(:title)
  end
end
