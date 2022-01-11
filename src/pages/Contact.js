import React from 'react';

import CommonHeader from '../components/CommonHeader';
import ContactForm from '../components/Contact/ContactForm';
import Map from '../components/Map';
import ContactInfo from '../components/Contact/ContactInfo';

const Contact = () => {
  return (
    <>
      <CommonHeader
        image="static/contact-hero-small.gif"
        label="CONTACT US"
        heading="For more questions about our products and pricing, send us a message"
      />
      <ContactForm />
      <Map />
      <ContactInfo />
    </>
  );
};

export default Contact;
