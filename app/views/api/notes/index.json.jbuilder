@notes.each do |note|
  json.set! note.id do
    json.merge! note.attributes
  end
end
