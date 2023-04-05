import { roles } from '@utils/roles';

export const authorizationAdapter = (response) => {
  if (response.role === roles.USER || response.role === roles.ADMIN) {
    return {
      id: response.id,
      username: response.username,
      avatar: response.avatar,
      email: response.email,
      phone: response.phone,
      nationality: response.nationality,
      gender: response.gender,
      birthday: response.birthday,
      blood: response.blood,
      role: response.role,
    };
  }
  return {
    id: response.id,
    name: response.name,
    area: response.area,
    avatar: response.img_profile,
    email: response.email,
    phone: response.phone,
    headquarter: response.headquarter,
    gender: response.gender,
    qualifications: response.qualifications,
    memberships: response.memberships,
    introduction: response.introduction,
    skills: response.skills,
    password: response.password,
    role: response.role,
  };
};
