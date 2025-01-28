import React from 'react';

import CommonHeader from '../components/CommonHeader';
import ContactForm from '../components/Contact/ContactForm';
import Map from '../components/Map';
import ContactInfo from '../components/Contact/ContactInfo';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Comlogik Business Systems</title>
        <link rel="canonical" href="https://comlogikph.com/contact" />
        <meta
          name="description"
          content="Get in touch with Comlogik Business Systems for inquiries about our healthcare IT solutions, hospital information systems, and more."
        />
        <meta
          property="og:title"
          content="Contact Us - Comlogik Business Systems"
        />
        <meta
          property="og:description"
          content="Contact us today for any questions regarding our healthcare solutions, pricing, or support. We're here to help!"
        />
        <meta
          property="og:image"
          content="https://comlogikph.com/static/contact-hero-small.gif"
        />
        <meta property="og:type" content="website" />
      </Helmet>
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
