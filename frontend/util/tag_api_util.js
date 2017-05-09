export const fetchTags = () => {
  return $.ajax({
    method: "GET",
    url: 'api/tags'
  });
};

export const fetchTag = (tagId) => {
  return $.ajax({
    method: 'GET',
    url: `api/tags/${tagId}`
  });
};

export const createTag = (tag) => {
  return $.ajax({
    method: "POST",
    url: 'api/tags',
    data: { tag }
  });
};

export const updateTag = (tag) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tags/${tag.id}`,
    data: { tag }
  });
};

export const destroyTag = (tagId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tags/${tagId}`
  });
};
