class Api::NotebooksController < ApplicationController
  def index
    @notebooks = Notebook.all.where(author_id: current_user.id)
    render 'api/notebooks/index'
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author_id = current_user.id
    if @notebook.save
      render 'api/notebooks/show'
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def update
    @notebook = Notebook.find(params[:id])

    if @notebook.update(notebook_params)
      render 'api/notebooks/show'
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def show
    @notebook = Notebook.find(params[:id])
    render 'api/notebooks/show'
  end

  def destroy
    @notebook = Notebook.find(params[:id])
    if @notebook.default
      render json: ["Default notebook can't be deleted"], status: 422
    else
      @notebook.destroy
    end

    render 'api/notebooks/show'
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title, :author_id)
  end
end
