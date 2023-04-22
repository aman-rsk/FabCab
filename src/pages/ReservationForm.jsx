import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';

const ReservationForm = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
	const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

		if (!pickupLocation || !dropoffLocation || !date || !time) {
			alert("Please fill out all required fields.");
			return;
		}

		const selectedDateTime = new Date(`${date} ${time}`);
  	if (isNaN(selectedDateTime.getTime())) {
    alert("Please enter a valid date and time.");
    

		
		return;
  }
	setSubmitted(true);
  };

  return (
    <Form className='w-75 mx-auto my-5' onSubmit={handleSubmit}>
			<h2>Reserve a Cab:</h2>
      <Form.Group controlId="pickupLocation">
        <Form.Label>Pickup location:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter pickup location"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mt-3' controlId="dropoffLocation">
        <Form.Label>Drop-off location:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter drop-off location"
          value={dropoffLocation}
          onChange={(e) => setDropoffLocation(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mt-3' controlId="date">
        <Form.Label>Date:</Form.Label>
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mt-3' controlId="time">
        <Form.Label>Time:</Form.Label>
        <Form.Control
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mt-3' controlId="additionalRequirements">
        <Form.Label>Additional requirements:</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter any additional requirements"
          value={additionalRequirements}
          onChange={(e) => setAdditionalRequirements(e.target.value)}
        />
      </Form.Group>

      <Button className='mt-3 fw-bold' variant="warning" type="submit">
        Submit
      </Button>

			{submitted && (
        <Alert className='mt-3' variant='success'>
          Your reservation has been submitted with the following details:
          <ul>
            <li>Pickup location: {pickupLocation}</li>
            <li>Drop-off location: {dropoffLocation}</li>
            <li>Date: {date}</li>
            <li>Time: {time}</li>
            <li>Additional requirements: {additionalRequirements}</li>
          </ul>
        </Alert>
      )}
    </Form>
  );
};

export default ReservationForm;