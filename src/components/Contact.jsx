// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    emailjs.send(
      'service_ba0elzb',       // Email service ID
      'template_3hmw3qh',      // Email template ID
      {
        email: email,          // Pass the email
        phone_number: phone    // Pass the phone number
      },
      '-uIhpiL48Wqbmpj7g'           // Your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      // Optionally, clear the form after successful submission
      setEmail('');
      setPhone('');
    })
    .catch((error) => {
      console.error('Email send failed:', error);
    });
  };

  return (
    <div className="contact">
      <p id='contacth'>Contact</p>
      <form id='form' onSubmit={sendEmail}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id='input'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state on input change
          required
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <input
         placeholder='phone'
          type="text"
          id='input'
          value={phone}
          onChange={(e) => setPhone(e.target.value)} // Update state on input change
          required
        />
        <br />
        <button type="submit">Connect</button>
        <br />
        <div className="li">
          <a href=''>INST</a>&nbsp;
          <a href=''>LI</a>
        </div>
      </form>
      <div className="contactss" style={{backgroundImage:'url(/t3.avif)'}}></div>
    </div>
  );
}

export default Contact;
