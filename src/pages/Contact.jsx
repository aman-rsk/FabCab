import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactUsPage = () => {
  return (
    <Container className='mt-5' fluid>
      <Row className="justify-content-center align-items-center text-center">
        <Col md={6}>
          <h1>Contact Us</h1>
          <p>Have a question or comment? Contact us today!</p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-5">
        <Col md={6}>
          <h2>Phone</h2>
          <p>+91-555-1234-567</p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-5">
        <Col md={6}>
          <h2>Email</h2>
          <p>info@fabcab.com</p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-5">
        <Col md={6}>
          <h2>Address</h2>
          <p>123 Main Street, City, State Zip</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsPage;