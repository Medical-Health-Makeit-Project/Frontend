import './doctorProfile.page.scss';

export const DoctorProfile = ({
  id,
  name,
  area,
  avatar,
  email,
  phone,
  headquarter,
  gender,
  qualifications,
  memberships,
  introduction,
  skills,
  password,
  role,
}) => {
  console.log({
    id,
    name,
    area,
    avatar,
    email,
    phone,
    headquarter,
    gender,
    qualifications,
    memberships,
    introduction,
    skills,
    password,
    role,
  });
  return <div>Hola</div>;
};
