import 'bootstrap/dist/css/bootstrap.min.css';
import { SlCalender } from 'react-icons/sl';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';

import AppointmentInfo from './components/AppointmentInfo';
import { useState, useCallback, useEffect } from 'react';

function App() {
  let [appointments, setAppointments] = useState([]);
  let [query, setQuery] = useState('');
  let [sortby, setSortBy] = useState('firstName');
  let [orderBy, setOrderBy] = useState('asc');

  const filteredAppointments = appointments
    .filter(appointment => {
      return (
        appointment.firstName.toLowerCase().includes(query.toLowerCase()) ||
        appointment.lastName
          .toLowerCase()
          .includes(query.toLocaleLowerCase()) ||
        appointment.aptDate.toLowerCase().includes(query.toLowerCase())
      );
    })
    .sort((a, b) => {
      let order = orderBy === 'asc' ? 1 : -1;
      return a[sortby].toLowerCase() < b[sortby].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setAppointments(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-light mt-3">
              <span className="me-3">
                <SlCalender />
              </span>
              Appointments
            </h1>
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            className="mx-auto">
            <Search
              query={query}
              onQueryChange={myQuery => setQuery(myQuery)}
              orderBy={orderBy}
              onOrderByChange={mySort => setOrderBy(mySort)}
              sortBy={sortby}
              onSortByChange={mySort => setSortBy(mySort)}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <AddAppointment
            onSendAppointment={myAppointment =>
              setAppointments([...appointments, myAppointment])
            }
            lastId={appointments.reduce(
              (max, item) => (Number(item.id) > max ? Number(item.id) : max),
              0
            )}
          />
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            <Card className="mb-3">
              <Card.Header className="text-center">
                {' '}
                Upcoming Appointments
              </Card.Header>
              <ListGroup variant="flush">
                {filteredAppointments.length > 0 ? (
                  filteredAppointments.map(appointment => (
                    <AppointmentInfo
                      key={appointment.id}
                      appointment={appointment}
                      deleteAppointment={appointmentId =>
                        setAppointments(
                          filteredAppointments.filter(
                            appointment => appointment.id !== appointmentId
                          )
                        )
                      }
                    />
                  ))
                ) : (
                  <p className="text-center">No appointments found.</p> //
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
