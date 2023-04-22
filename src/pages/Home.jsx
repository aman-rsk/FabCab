import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container className='mt-5' fluid>
      <Row className="justify-content-center align-items-center text-center">
        <Col md={6}>
          <h1>Welcome to FabCab</h1>
          <p>We are a reliable and affordable taxi rental company. Book your ride today!</p>
          <Link to="/reservation"><Button variant="warning">Get a Cab!</Button></Link>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center text-center my-5">
        <Col md={6}>
          <h2 className='text-center'>Why Choose FabCab?</h2>
          <ul style={{listStyleType: 'none'}}>
            <li>Fast and reliable service</li>
            <li>Clean and well-maintained vehicles</li>
            <li>Competitive pricing</li>
            <li>24/7 availability</li>
          </ul>
          <p>Our drivers are professional and courteous, and we strive to make your ride as comfortable and enjoyable as possible.</p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center text-center my-5">
        <Col md={6}>
          <h2>Our Service Areas</h2>
          <p>We provide taxi rental services throughout the city and surrounding areas. Whether you need a ride to the airport, a corporate event, or a night out on the town, we've got you covered.</p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center text-center my-5">
        <Col md={6}>
          <h2>How to Book</h2>
          <p>Booking a ride with FabCab is easy! Simply call us at +91-555-1234-567 or email us at info@fabcab.com. You can also use our convenient online booking system to reserve your ride.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;