import { PatientInformation } from '../patientInformation';
import { AppointmentInformation } from '../appointmentInformation';
import { useAppointmentContext } from '../../context';
import { AnimatePresence, motion } from 'framer-motion';

export const FormContainer = () => {
  const { showSecondForm } = useAppointmentContext();

  return (
    <>
      <AnimatePresence mode="wait">
        {!showSecondForm ? (
          <motion.div
            key="form-1"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
          >
            <PatientInformation />
          </motion.div>
        ) : (
          <motion.div
            key="form-2"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
          >
            <AppointmentInformation />
          </motion.div>
        )}
        ;
      </AnimatePresence>
    </>
  );
};
