export const getAppointmentsDoctorAdapter = ({ appointments }) => {
  return appointments.map(({ date, patient, scheduleAt, reason }) => {
    return {
      date: date,
      patient: {
        firstname: patient.firstname,
        lastname: patient.lastname,
        phone: patient.phone,
        email: patient.email,
        gender: patient.gender,
      },
      scheduleAt,
      reason,
    };
  });
};
