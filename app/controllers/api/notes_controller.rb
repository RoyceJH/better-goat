class Api::NotesController < ApplicationController
  def index
    @notes = Note.all.includes(:tags).where(author_id: current_user.id)
    render :index
  end

  def create
    @note = Note.new(note_params)
    @note.author_id = current_user.id

    new_tags = params[:note][:tags] || []

    tags_to_create = create_new_tags(new_tags)
    check_default_NB(@note) unless @note.notebook_id
    check_title(@note)

    if @note.save
      @note.tag_ids = tags_to_create
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

    new_tags = params[:note][:tags] || []
    tags_to_create = create_new_tags(new_tags)
    check_title(@note)

    if @note.update(note_params)
      @note.tag_ids = tags_to_create
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

  def check_default_NB(note)
    default_notebook = Notebook.find_by(default: true, author_id: current_user.id)
    note.notebook_id = default_notebook.id
  end

  def create_new_tags(tag_ids)
    tag_ids.map do |tag|
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
  end

  def check_title(note)
    if note.title.empty?
      note.title = 'untitled'
    end
  end
end
