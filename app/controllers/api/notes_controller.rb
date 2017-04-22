class Api::NotesController < ApplicationController
  def index
    @notes = Note.all
    render :index
  end

  def create
    @note = Note.new(note_params)

    if @note.save
      render 'api/json/show'
    else
      render json: ["Invalid note fields"], status: 422
    end
  end


  def show
    @note = Note.find(params[:id])
  end

  def update
    @note = Note.find(params[:id])
    @note.update(note_params)
    render 'api/json/show'
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    render 'api/json/show'
  end
end
