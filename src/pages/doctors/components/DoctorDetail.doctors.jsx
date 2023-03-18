import { useDoctorsContext } from '../context/DoctorsContext';
import { Button } from '@components/buttons/Button.components';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import './doctordetail.doctors.scss';
import { BsCheckLg } from 'react-icons/bs';

export const DoctorDetail = () => {
  const { doctorFilter } = useDoctorsContext();
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState({
    completeName: '',
    phone: '',
    service: '',
    imputDate: date,
  });
  const { completeName, phone, service, inputDate } = data;
  const path = window.location.pathname.split('/');
  const id = path[path.length - 1];
  const doctor = doctorFilter(id)[0];
  const { name, area, avatar, bio, memberships, qualifications, skills } =
    doctor;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    setData({
      completeName: '',
      phone: '',
      service: '',
      inputDate: date,
    });
  };

  return (
    <div className="main__detail-container">
      <section className="profile__main">
        <picture className="avatar__container">
          <img src={avatar} alt="Profile Image" className="avatar__img" />
        </picture>

        <div className="name__container">
          <p>{name}</p>
        </div>

        <div className="area__container">
          <p>{area}</p>
        </div>

        <div className="qualifications__container">
          <h3>Qualifications</h3>
          {qualifications.map((qua) => {
            return <p key={qua}>{qua}</p>;
          })}
        </div>

        <div className="memberships__container">
          <h3>Memberships</h3>
          {memberships.map((member) => {
            return <p key={member}>{member}</p>;
          })}
        </div>
      </section>

      <section className="details__main-container">
        <article className="bio__container">
          <h3>Introduction</h3>
          <p>{bio}</p>
        </article>

        <article className="skills__container">
          <h3>Skills</h3>
          <div className="skill__layout">
            {skills.map((skill) => {
              return (
                <div key={skill} className="skill">
                  <BsCheckLg size={12} className="check-icon" />
                  <p key={skill}>{skill}</p>
                </div>
              );
            })}
          </div>
        </article>

        <section className="appointment__container">
          <h3>Book an appointment</h3>
          <form className="form__container" onSubmit={handleSubmit}>
            <div className="username__input-container inputs-container">
              <label htmlFor="completeName">Your name</label>
              <input
                id="completeName"
                type="text"
                name="completeName"
                minLength="3"
                pattern="[A-Za-z\s]{3,}"
                required
                placeholder="Your name"
                className="username__input input-box"
                onChange={handleChange}
                value={completeName}
              />
            </div>

            <div className="phone__input-container inputs-container">
              <label htmlFor="phone">Your phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                className="username__input input-box"
                placeholder="123456789"
                onChange={handleChange}
                value={phone}
              />
            </div>

            <div className="service__input-container inputs-container">
              <label htmlFor="service">Type of service required</label>
              <select name="service" id="service" className="input-box">
                <option value="null">Select service</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="cardiology">Cardiology</option>
                <option value="ophthalmology">Ophthalmology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="psychiatry">Psychiatry</option>
                <option value="nutrition">Nutrition</option>
              </select>
            </div>

            <div className="date__input-container inputs-container">
              <label htmlFor="date">Select date</label>
              <DatePicker
                name="date"
                selected={date}
                value={inputDate}
                className="input-box"
              />
            </div>

            <Button
              variant="solid"
              color="info"
              className="appointment__button"
              type="submit"
            >
              Get appointment
            </Button>
          </form>
        </section>
      </section>
    </div>
  );
};
