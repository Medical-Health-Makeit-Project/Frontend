import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '@constants';

export const AppointmentsList = ({ appointments }) => {
  const appointmentsOrdered = appointments.sort((a, b) => new Date(a.date) - new Date(b.date));
  return (
    <TableContainer>
      <Table variant="simple" size={'sm'}>
        <TableCaption>
          <div>These are your upcoming appointments, please arrive to them 15 minutes early.</div>
          <div>If you have problems getting to the appointment, please call (04) 8544 3322</div>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Time</Th>
            <Th>Area</Th>
            <Th>Doctor</Th>
            <Th>Doctor Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {appointmentsOrdered.map((appointment) => {
            return (
              <Tr key={uuid()}>
                <Td>{dayjs(appointment.date).format(DATE_FORMAT)}</Td>
                <Td>{appointment.scheduleAt}</Td>
                <Td>{appointment.area}</Td>
                <Td>{`${appointment.doctor.firstname} ${appointment.doctor.lastname}`}</Td>
                <Td>{appointment.doctor.email}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
