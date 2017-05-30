export const login = (user) => {
  return $.ajax({
    method:'POST',
    url: '/api/session',
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method:'DELETE',
    url: '/api/session'
  });
};

export const signup = (user) => {
  return $.ajax({
    method:'POST',
    url: '/api/user',
    data: { user }
  });
};

export const updateProfile = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/user`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};
