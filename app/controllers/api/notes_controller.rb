class Api::NotesController < ApplicationController
  def index
    @notes = Note.all.where(author_id: current_user.id)
    render :index
  end

  def create
    @note = Note.new(note_params)
    @note.author_id = current_user.id

    if @note.save
      render 'api/notes/show'
    else
      render json: ["Invalid note fields"], status: 422
    end
  end

  def show
    @note = Note.find(params[:id])
  end

  def update
    @note = Note.find(params[:id])
    if @note.update(note_params)
      render 'api/notes/show'
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    render 'api/notes/show'
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :author_id, :notebook_id, :preview)
  end
end
