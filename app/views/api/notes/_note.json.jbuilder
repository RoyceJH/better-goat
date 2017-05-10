json.merge! note.attributes

json.tags do
  json.array! note.tag_ids
end
