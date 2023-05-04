export const getAppointmentsAdapter = ({ appointments }) => {
  return appointments.map(({ area, date, doctor, headquarter, patient, scheduleAt }) => {
    return {
      area: area.area,
      date,
      doctor: {
        firstname: doctor.firstname,
        lastname: doctor.lastname,
        email: doctor.email,
        phone: doctor.phone,
      },
      headquarter: {
        address: headquarter.address,
        city: headquarter.city,
      },
      patient: {
        firstname: patient.firstname,
        lastname: patient.lastname,
      },
      scheduleAt,
    };
  });
};
