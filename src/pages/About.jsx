import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className='mt-5' fluid>
      <Row className="justify-content-center align-items-center text-center">
        <Col md={6}>
          <h1>About Us</h1>
          <p>FabCab is a trusted and experienced taxi rental company operating in the city for over 10 years. We offer a range of services to meet your transportation needs, including airport transfers, corporate travel, and sightseeing tours.</p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-5">
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>Our mission is to provide our customers with safe, reliable, and affordable transportation services. We strive to exceed our customers' expectations by providing exceptional customer service and a comfortable ride.</p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-5">
        <Col md={6}>
          <h2>Our Team</h2>
          <p>Our team consists of experienced and professional drivers who are dedicated to providing the best possible service to our customers. We also have a customer support team available 24/7 to assist you with any questions or concerns.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;