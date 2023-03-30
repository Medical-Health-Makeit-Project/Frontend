export const userAdapter = (users) => {
  if (Array.isArray(users)) {
    return users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        nationality: user.nationality,
        avatar: user.avatar,
        gender: user.gender,
        birthday: user.birthday,
        blood: user.blood,
      };
    });
  }
  return {
    id: users.id,
    name: users.name,
    email: users.email,
    phone: users.phone,
    nationality: users.nationality,
    avatar: users.avatar,
    gender: users.gender,
    birthday: users.birthday,
    blood: users.blood,
  };
};
