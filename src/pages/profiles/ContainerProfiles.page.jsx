import { useSelector } from 'react-redux';
import { roles } from '@utils/roles';
import { Heading } from '@components/heading';
import { UserProfile } from './components/userProfile';
import { DoctorProfile } from './components/doctorProfile';
import headingImage from '@assets/headin-profile.jpg';
import './containerProfiles.page.scss';

export const ContainerProfiles = () => {
  const user = useSelector((state) => state.auth);

  return (
    <main>
      <Heading title="Profile" image={headingImage} />
      {user.role === roles.USER ? <UserProfile {...user} /> : <DoctorProfile {...user} />}
    </main>
  );
};
