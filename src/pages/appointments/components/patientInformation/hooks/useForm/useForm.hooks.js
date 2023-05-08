import { useState } from 'react';
import { useAppointmentContext } from '../../../../context';
import { formValidator } from '@utils/tools';

export const useForm = () => {
  const { patientForm, setPatientForm } = useAppointmentContext();

  const [errorsMessage, setErrorsMessage] = useState({
    nameError: '',
    lastnameError: '',
    idError: '',
    emailError: '',
    phoneError: '',
  });

  const handleChangeName = (e) => {
    const { name, value } = e.target;
    setPatientForm({
      ...patientForm,
      [name]: value,
    });
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
    }
  };

  const handleChangeLastname = (e) => {
    const { name, value } = e.target;
    setPatientForm({
      ...patientForm,
      [name]: value,
    });
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
    }
  };

  const handleChangeIdentification = (e) => {
    const { name, value } = e.target;
    setPatientForm({
      ...patientForm,
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
    setPatientForm({
      ...patientForm,
      [name]: value,
    });
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
    }
  };

  const handleChangePhone = (e) => {
    const { name, value } = e.target;
    setPatientForm({
      ...patientForm,
      [name]: value,
    });
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
    }
  };

  const handleChangeGender = (e) => {
    const { name, value } = e.target;
    if (formValidator().gender(value)) {
      setPatientForm({
        ...patientForm,
        [name]: value,
      });
    }
  };

  const handleIsAdult = (e) => {
    const { name, value } = e.target;
    if (value === 'false') {
      setPatientForm({
        ...patientForm,
        patientId: null,
        [name]: value,
      });
    } else {
      setPatientForm({
        ...patientForm,
        patientId: '',
        [name]: value,
      });
    }
  };

  return {
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
  };
};
