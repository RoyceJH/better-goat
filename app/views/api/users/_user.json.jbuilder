json.extract! user, :id, :username
json.image_url asset_path(user.image.url(:original))
