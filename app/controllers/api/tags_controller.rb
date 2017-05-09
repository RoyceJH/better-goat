class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all.where(author_id: current_user.id)
    render :index
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.author = current_user

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def update
    @tag = Tag.find(params[:id])

    if @tag.update(tag_params)
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def show
    @tag = Tag.find(params[:id])
    render :show
  end

  def destroy
    @tag = Tag.find(params[:id])
    if @tag.destroy
      render :show
    else
      render json: @tag.errors.full_messages, status: 404
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:title, :author)
  end
end
