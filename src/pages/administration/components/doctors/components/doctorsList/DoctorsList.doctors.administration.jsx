import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/buttons';
import { Loading } from '@components/loading';
import { Error } from '@components/error';
import { useDoctorContext } from '../../context/doctors.context';
import { allDoctorsSWR } from '@services/allDoctors';
import { deleteDoctor } from '../../services';
import { PublicRoutes } from '@routes';
import { errorMessage, successMessage } from '@utils/toastify';
import { confirmDeletion } from '@utils/swal';
import { TOKEN, DELETE_DOCTOR } from '@constants';
import './doctorsList.doctors.administration.scss';

export const DoctorsList = memo(() => {
  const { allDoctors, allDoctorsError, allDoctorsIsLoading } = allDoctorsSWR();
  const { setDoctorToBeUpdated } = useDoctorContext();

  const handleSetFormToUpdate = (doctor) => {
    setDoctorToBeUpdated({
      id: doctor.id,
      firstname: doctor.firstname,
      lastname: doctor.lastname,
      email: doctor.email,
      birthdate: doctor.birthdate,
      area: doctor.area,
      avatar: doctor.avatar,
      phone: doctor.phone,
      location: { city: doctor.headquarter.city, country: doctor.headquarter.location.country },
      gender: doctor.gender,
      qualifications: [...doctor.qualifications],
      memberships: [...doctor.memberships],
      skills: [...doctor.skills],
    });
  };
  const navigate = useNavigate();

  const handleDelete = async (e, doctor) => {
    try {
      e.preventDefault();
      const ACCESS_TOKEN = localStorage.getItem(TOKEN);
      if (!ACCESS_TOKEN) return navigate(PublicRoutes.LOGIN);
      const { id } = doctor;
      const payload = { id };
      const isConfirmed = await confirmDeletion();
      if (isConfirmed) {
        await deleteDoctor(DELETE_DOCTOR, payload, ACCESS_TOKEN);
        successMessage('Doctor deleted successfully!');
      }
      return;
    } catch (error) {
      return errorMessage(error.response.data || error.message);
    }
  };

  if (allDoctorsError) return <Error />;

  if (allDoctorsIsLoading) return <Loading />;

  return (
    <section className="doctor-list">
      {allDoctors?.map((doctor) => {
        return (
          <article key={doctor.id} className="doctor-list__item">
            <div className="doctor-list__avatar-container">
              <img src={doctor.avatar} alt="Avatar" className="avatar" />
            </div>
            <section className="doctor-list-info">
              <h3 className="doctor-list-info__fullname">{`${doctor.firstname} ${doctor.lastname}`}</h3>
              <p className="doctor-list-area">{doctor.area.area}</p>
            </section>
            <section className="buttons-action-container">
              <Button variant="outline" color="danger" onClick={(e) => handleDelete(e, doctor)}>
                Delete
              </Button>
              <Button color="info" onClick={() => handleSetFormToUpdate(doctor)}>
                Update
              </Button>
            </section>
          </article>
        );
      })}
    </section>
  );
});
