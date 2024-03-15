import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import { useState } from 'react';

const AddAppointment = ({ onSendAppointment, lastId }) => {
  const clearData = {
    firstName: '',
    lastName: '',
    aptDate: '',
    aptTime: '',
    aptNotes: '',
  };

  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);

  function formDataPublish() {
    const appointmentInfo = {
      id: lastId + 1,
      firstName: formData.firstName,
      lastName: formData.lastName,
      aptDate: formData.aptDate + ' ' + formData.aptTime,
      aptNotes: formData.aptNotes,
    };
    onSendAppointment(appointmentInfo);
    setFormData(clearData);
    setToggleForm(!toggleForm);
  }

  return (
    <Col md="8">
      <Card className="mb-3">
        <CardHeader className="d-flex align-items-center">
          <span>Add Appointment</span>
          <Button
            onClick={() => setToggleForm(!toggleForm)}
            variant="link"
            className="ms-auto">
            {toggleForm ? 'Cancel' : 'Add'}
          </Button>
        </CardHeader>
        {toggleForm && (
          <CardBody>
            <Form>
              <Row
                className="mb-3"
                style={{ alignItems: 'center' }}>
                <Form.Group as={Col}>
                  <Form.Label htmlFor="firstName">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    onChange={event =>
                      setFormData({
                        ...formData,
                        firstName: event.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label htmlFor="lastName">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    onChange={event =>
                      setFormData({ ...formData, lastName: event.target.value })
                    }
                  />
                </Form.Group>
              </Row>
              <Form.Group
                as={Col}
                className="mb-3">
                <Form.Label htmlFor="appointmentDate">
                  Appointment Date
                </Form.Label>
                <Form.Control
                  type="date"
                  id="appointmentDate"
                  onChange={event =>
                    setFormData({ ...formData, aptDate: event.target.value })
                  }
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3">
                <Form.Label htmlFor="appointmentTime">
                  Appointment Time
                </Form.Label>
                <Form.Control
                  type="time"
                  id="appointmentTime"
                  onChange={event =>
                    setFormData({ ...formData, aptTime: event.target.value })
                  }
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3">
                <Form.Label htmlFor="comments">Comments</Form.Label>
                <Form.Control
                  as="textarea"
                  id="comments"
                  placeholder="Comments"
                  onChange={event =>
                    setFormData({ ...formData, aptNotes: event.target.value })
                  }
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={formDataPublish}>
                Submit
              </Button>
            </Form>
          </CardBody>
        )}
      </Card>
    </Col>
  );
};

export default AddAppointment;
