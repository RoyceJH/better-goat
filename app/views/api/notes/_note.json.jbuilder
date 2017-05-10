json.merge! note.attributes

json.tags do
  json.array! note.tags, :id, :title
end
