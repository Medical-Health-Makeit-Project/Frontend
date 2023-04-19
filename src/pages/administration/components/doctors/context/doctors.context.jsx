import { createContext, useContext, useState } from 'react';
import { PropTypes } from 'prop-types';

const DoctorStore = createContext();

export const DoctorContext = ({ children }) => {
  const [doctorToBeUpdated, setDoctorToBeUpdated] = useState({
    firstname: '',
    lastname: '',
    email: '',
    birthdate: new Date(),
    area: '',
    avatar: '',
    phone: '',
    location: { city: '', country: '' },
    gender: '',
    qualifications: [],
    memberships: [],
    skills: [],
  });

  return (
    <DoctorStore.Provider value={{ setDoctorToBeUpdated, doctorToBeUpdated }}>
      {children}
    </DoctorStore.Provider>
  );
};

export const useDoctorContext = () => {
  const context = useContext(DoctorStore);
  return context;
};

DoctorContext.propTypes = {
  children: PropTypes.node.isRequired,
};
