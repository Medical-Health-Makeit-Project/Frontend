export const doctorAdapter = (doctors) => {
  if (Array.isArray(doctors)) {
    return doctors.map((doctor) => {
      return {
        id: doctor.id,
        name: doctor.name,
        area: doctor.area,
        avatar: doctor.img_profile,
        qualifications: doctor.qualifications,
        memberships: doctor.memberships,
        bio: doctor.introduction,
        skills: doctor.skills,
      };
    });
  }
  return {
    id: doctors.id,
    name: doctors.name,
    area: doctors.area,
    avatar: doctors.img_profile,
    qualifications: doctors.qualifications,
    memberships: doctors.memberships,
    bio: doctors.introduction,
    skills: doctors.skills,
  };
};
