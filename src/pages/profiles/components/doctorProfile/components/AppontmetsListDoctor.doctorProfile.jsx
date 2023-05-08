import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '@constants';
import './appointmentsListDoctor.scss';

export const AppontmetsListDoctor = ({ appointments }) => {
  const appointmentsOrdered = appointments.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <>
      <h2 className="doctor-appointments__title">Upcoming Appointments</h2>
      <TableContainer>
        <Table variant="simple" size={'sm'}>
          <TableCaption>
            <div>*If you have problems getting to the appointment, please call (04) 8544 3322</div>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Patient</Th>
              <Th>Patient contact</Th>
              <Th>Consultation</Th>
            </Tr>
          </Thead>
          <Tbody>
            {appointmentsOrdered.map(({ date, patient, scheduleAt, reason }) => {
              return (
                <Tr key={uuid()}>
                  <Td>{dayjs(date).format(DATE_FORMAT)}</Td>
                  <Td>{scheduleAt}</Td>
                  <Td>{`${patient.firstname} ${patient.lastname}`}</Td>
                  <Td>{patient.email}</Td>
                  <Td>{reason}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
