class Api::NotesController < ApplicationController
  def index
    @notes = Note.all.includes(:tags).where(author_id: current_user.id)
    render :index
  end

  def create
    @note = Note.new(note_params)
    @note.author_id = current_user.id

    if(params[:note][:tagsToCreate])
      params[:note][:tagsToCreate].each do |tag|
        newTag = ({title: tag[1][:title], author_id: current_user.id})
        tagToAdd = Tag.create(newTag);
        tags.push(tagToAdd)
      end
    end

    if(params[:note][:tagsToAdd])
      params[:note][:tagsToAdd].each do |tag|
        tags.push(tag[1])
      end
    end

    if @note.notebook_id.nil?
      default_notebook = Notebook.find_by(default: true)
      @note.notebook_id = default_notebook.id
    end

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
    tag_ids = @note.tag_ids
    new_tags = params[:note][:tags].map do |tag|
      tag_id = tag[1][:id]
      if tag_id.empty?
        to_create = tag[1]
        tag_id = Tag.create(
          title: to_create[:title],
          author_id: current_user.id
        ).id
      end

      tag_id
    end

    if @note.update(note_params)
      @note.tag_ids = new_tags
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
