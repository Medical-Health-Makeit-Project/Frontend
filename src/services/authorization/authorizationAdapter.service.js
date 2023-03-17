export const authorizationAdapter = (response) => {
  return {
    username: response.username,
    avatar: response.avatar,
    role: response.role,
  };
};
