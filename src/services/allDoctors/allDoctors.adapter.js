export const doctorAdapter = (doctors) => {
  if (Array.isArray(doctors)) {
    return doctors.map((doctor) => {
      return {
        id: doctor.id,
        prefix: doctor.prefix,
        firstname: doctor.firstname,
        lastname: doctor.lastname,
        area: doctor.area,
        avatar: doctor.avatar,
        email: doctor.email,
        phone: doctor.phone,
        headquarter: doctor.headquarter,
        gender: doctor.gender,
        introduction: doctor.introduction,
        qualifications: doctor.qualifications,
        memberships: doctor.memberships,
        skills: doctor.skills,
      };
    });
  }
  return {
    id: doctors.id,
    prefix: doctors.prefix,
    firstname: doctors.firstname,
    lastname: doctors.lastname,
    area: doctors.area,
    avatar: doctors.avatar,
    email: doctors.email,
    phone: doctors.phone,
    headquarter: doctors.headquarter,
    gender: doctors.gender,
    introduction: doctors.introduction,
    qualifications: doctors.qualifications,
    memberships: doctors.memberships,
    skills: doctors.skills,
  };
};
