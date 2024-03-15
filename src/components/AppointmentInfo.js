import PropTypes from 'prop-types';
import { Button, ListGroupItem } from 'react-bootstrap';
import { RiDeleteBin6Line } from 'react-icons/ri';

const AppointmentDetail = ({ label, value }) => (
  <p>
    <strong>{label}: </strong> {value}
  </p>
);

AppointmentDetail.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const AppointmentInfo = ({ appointment, deleteAppointment }) => {
  const { aptDate, firstName, lastName, aptNotes } = appointment;

  return (
    <ListGroupItem>
      <AppointmentDetail
        label="Date"
        value={aptDate}
      />
      <AppointmentDetail
        label="First Name"
        value={firstName}
      />
      <AppointmentDetail
        label="Last Name"
        value={lastName}
      />
      <AppointmentDetail
        label="Notes"
        value={aptNotes}
      />
      <Button
        onClick={() => deleteAppointment(appointment.id)}
        size="sm"
        className="d-flex align-items-center"
        variant="danger">
        <RiDeleteBin6Line size={15} />
        <span className="ms-2">Delete</span>
      </Button>
    </ListGroupItem>
  );
};

AppointmentInfo.propTypes = {
  appointment: PropTypes.shape({
    aptDate: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    aptNotes: PropTypes.string,
  }),
};

AppointmentInfo.defaultProps = {
  appointment: {
    aptDate: '',
    firstName: '',
    lastName: '',
    aptNotes: '',
  },
};

export default AppointmentInfo;
