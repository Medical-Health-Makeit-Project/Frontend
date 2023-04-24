import { useRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Spinner } from '@chakra-ui/react';
import { Button } from '@components/buttons';
import { useForm } from './hooks/useForm';
import { useAppointmentContext } from '../../context';
import { errorMessage } from '@utils/toastify';
import './patientInformation.appointments.scss';

export const PatientInformation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    errorsMessage,
    patientForm,
    setPatientForm,
    handleChangeName,
    handleChangeLastname,
    handleChangeIdentification,
    handleChangeEmail,
    handleChangePhone,
    handleChangeGender,
    handleIsAdult,
  } = useForm();

  const { setShowSecondForm } = useAppointmentContext();

  const inputName = useRef(null);
  useEffect(() => {
    setIsLoaded(true);
    if (isLoaded) {
      inputName.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(patientForm).some((input) => input === '')) {
      return errorMessage('You must complete the form');
    }
    if (Object.values(errorsMessage).some((error) => error !== '')) {
      return errorMessage('You have some error in the form, please verify');
    }
    return setShowSecondForm(true);
  };

  return !isLoaded ? (
    <div className="spinner-container">
      <Spinner color="#3fb6d6" />
    </div>
  ) : (
    <section className="appointments-section-1">
      <h2 className="appointments-section-1__title">Patient Information</h2>
      <form className="appointments-section-1__form" data-aos="fade-right">
        <div className="input-container">
          <label htmlFor="name">Patient Name:</label>
          <input
            ref={inputName}
            type="text"
            placeholder="Candelario"
            id="name"
            name="patientName"
            className="input-container__input"
            pattern="[A-Za-z\s]{2,}"
            onChange={handleChangeName}
            value={patientForm.patientName}
          />
          <span className="errorMessage">{errorsMessage.nameError || null}</span>
        </div>
        <div className="input-container">
          <label htmlFor="lastname">Patient Lastname:</label>
          <input
            type="text"
            placeholder="Obeso Hernandez"
            id="lastname"
            name="patientLastname"
            className="input-container__input"
            pattern="^[A-Z][a-z]+\s[A-Z][a-z]+$"
            onChange={handleChangeLastname}
            value={patientForm.patientLastname}
          />
          <span className="errorMessage">{errorsMessage.lastnameError || null}</span>
        </div>
        <div className="input-adult-container">
          <div>
            <label>Is an adult?:</label>
          </div>
          <div className="input-adult-options-container">
            <div className="input-adult-container__option">
              <input
                type="radio"
                id="adult"
                value={true}
                name="isAdult"
                onChange={handleIsAdult}
                checked={patientForm.isAdult === 'true'}
              />
              <label htmlFor="adult">Yes</label>
            </div>
            <div className="input-adult-container__option">
              <input
                type="radio"
                id="younger"
                value={false}
                name="isAdult"
                onChange={handleIsAdult}
                checked={patientForm.isAdult === 'false'}
              />
              <label htmlFor="younger">No</label>
            </div>
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="identification">Patient Identification:</label>
          <input
            type="text"
            placeholder="0000000000"
            id="identification"
            name="patientId"
            className="input-container__input"
            pattern="^([0-9]{10})$"
            onChange={handleChangeIdentification}
            disabled={patientForm.isAdult === 'true' ? false : true}
            value={patientForm.isAdult === 'true' ? patientForm.patientId || '' : ''}
          />
          <span className="errorMessage">
            {errorsMessage.idError && patientForm.isAdult === 'true' ? errorsMessage.idError : null}
          </span>
        </div>
        <div className="input-container">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            placeholder="candelario@gmail.com"
            id="email"
            name="patientEmail"
            className="input-container__input"
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
            onChange={handleChangeEmail}
            value={patientForm.patientEmail}
          />
          <span className="errorMessage">{errorsMessage.emailError || null}</span>
        </div>
        <div className="input-container">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            placeholder="345 567 7878"
            id="phone"
            name="patientPhone"
            className="input-container__input"
            pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
            onChange={handleChangePhone}
            value={patientForm.patientPhone}
          />
          <span className="errorMessage">{errorsMessage.phoneError || null}</span>
        </div>
        <div className="input-container">
          <label htmlFor="birth">Birth:</label>
          <DatePicker
            maxDate={new Date()}
            dateFormat="dd/MM/yyyy"
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            selected={patientForm.patientBirth}
            name="patientBirth"
            id="birth"
            className="input-container__input"
            onChange={(date) => setPatientForm({ ...patientForm, patientBirth: date })}
          />
        </div>
        <div className="input-gender-container">
          <div>
            <label>Gender:</label>
          </div>
          <div className="input-gender-options-container">
            <div className="input-gender-container__option">
              <input
                type="radio"
                id="male"
                value="Male"
                name="patientGender"
                onChange={handleChangeGender}
                checked={patientForm.patientGender === 'Male'}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="input-gender-container__option">
              <input
                type="radio"
                id="female"
                value="Female"
                name="patientGender"
                onChange={handleChangeGender}
                checked={patientForm.patientGender === 'Female'}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div className="input-gender-container__option">
              <input
                type="radio"
                id="noBinary"
                value="No Binary"
                name="patientGender"
                onChange={handleChangeGender}
                checked={patientForm.patientGender === 'No Binary'}
              />
              <label htmlFor="noBinary">No Binary</label>
            </div>
          </div>
        </div>
        <div className="button-container">
          <Button
            type="submit"
            color="info"
            className="button-container__next-button"
            onClick={handleSubmit}
          >
            Next
          </Button>
        </div>
      </form>
    </section>
  );
};
