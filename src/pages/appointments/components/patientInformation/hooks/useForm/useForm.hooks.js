import { useState } from 'react';
import { formValidator } from '@utils/tools';

export const useForm = () => {
  const [appointmentForm, setAppointmentForm] = useState({
    patientName: '',
    patientLastname: '',
    patientId: '',
    patientEmail: '',
    patientPhone: '',
    isAdult: true,
    patientGender: 'No Binary',
    patientBirth: new Date(),
  });

  const [errorsMessage, setErrorsMessage] = useState({
    nameError: '',
    lastnameError: '',
    idError: '',
    emailError: '',
    phoneError: '',
  });

  const handleChangeName = (e) => {
    const { name, value } = e.target;
    if (!formValidator().firstName(value)) {
      setErrorsMessage({
        ...errorsMessage,
        nameError:
          '*Your name must contain at least 3 words and contain the first letter as capital',
      });
    } else {
      setErrorsMessage({
        ...errorsMessage,
        nameError: '',
      });
      setAppointmentForm({
        ...appointmentForm,
        [name]: value,
      });
    }
  };

  const handleChangeLastname = (e) => {
    const { name, value } = e.target;
    if (!formValidator().lastname(value)) {
      setErrorsMessage({
        ...errorsMessage,
        lastnameError: '*You must provide two last names with the first capital letter each',
      });
    } else {
      setErrorsMessage({
        ...errorsMessage,
        lastnameError: '',
      });
      setAppointmentForm({
        ...appointmentForm,
        [name]: value,
      });
    }
  };

  const handleChangeIdentification = (e) => {
    const { name, value } = e.target;
    setAppointmentForm({
      ...appointmentForm,
      [name]: value,
    });
    if (!formValidator().identification(value)) {
      setErrorsMessage({
        ...errorsMessage,
        idError: 'Your id must contain 10 digits',
      });
    } else {
      setErrorsMessage({
        ...errorsMessage,
        idError: '',
      });
    }
  };

  const handleChangeEmail = (e) => {
    const { name, value } = e.target;
    if (!formValidator().email(value)) {
      setErrorsMessage({
        ...errorsMessage,
        emailError: 'Please provide a valid email',
      });
    } else {
      setErrorsMessage({
        ...errorsMessage,
        emailError: '',
      });
      setAppointmentForm({
        ...appointmentForm,
        [name]: value,
      });
    }
  };

  const handleChangePhone = (e) => {
    const { name, value } = e.target;
    if (!formValidator().phone(value)) {
      setErrorsMessage({
        ...errorsMessage,
        phoneError: 'Your phone must contain at least 10 digits',
      });
    } else {
      setErrorsMessage({
        ...errorsMessage,
        phoneError: '',
      });
      setAppointmentForm({
        ...appointmentForm,
        [name]: value,
      });
    }
  };

  const handleChangeGender = (e) => {
    const { name, value } = e.target;
    if (formValidator().gender(value)) {
      setAppointmentForm({
        ...appointmentForm,
        [name]: value,
      });
    }
  };

  const handleIsAdult = (e) => {
    const { name, value } = e.target;
    setAppointmentForm({
      ...appointmentForm,
      [name]: value,
    });
  };

  return {
    errorsMessage,
    appointmentForm,
    setAppointmentForm,
    handleChangeName,
    handleChangeLastname,
    handleChangeIdentification,
    handleChangeEmail,
    handleChangePhone,
    handleChangeGender,
    handleIsAdult,
  };
};
