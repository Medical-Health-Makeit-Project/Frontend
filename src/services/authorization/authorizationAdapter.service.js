import { roles } from '@utils/roles';

export const authorizationAdapter = (response) => {
  if (response.role === roles.USER) {
    return {
      id: response.id,
      username: response.username,
      avatar: response.avatar,
      email: response.email,
      phone: response.phone,
      nationality: response.nationality,
      gender: response.gender,
      birthday: response.birthdate,
      blood: response.blood_type,
      role: response.role,
    };
  }
  if (response.role === roles.ADMIN) {
    return {
      name: response.name,
      email: response.email,
      role: response.role,
    };
  }
  return {
    id: response.id,
    name: response.firstname,
    lastname: response.lastname,
    area: response.area,
    avatar: response.avatar,
    email: response.email,
    phone: response.phone,
    headquarter: response.location,
    gender: response.gender,
    qualifications: response.qualifications,
    memberships: response.memberships,
    introduction: response.introduction,
    skills: response.skills,
    role: response.role,
  };
};
