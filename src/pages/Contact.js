import React, { Component } from 'react';
import CommonHeader from '../components/CommonHeader';
import ContactForm from '../components/Contact/ContactForm';
import Map from '../components/Map';
import ContactInfo from '../components/Contact/ContactInfo';

export default class Contact extends Component {
  render() {
    return (
      <>
        <CommonHeader
          image="static/contact-hero.gif"
          label="CONTACT US"
          heading="For more questions about our products and pricing, send us a message"
        />
        <ContactForm />
        <Map />
        <ContactInfo />
      </>
    );
  }
}
