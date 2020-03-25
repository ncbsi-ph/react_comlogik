import React, { Component } from 'react';

import ContactForm from '../components/Contact/ContactForm';
import Map from '../components/Map';
import ContactInfo from '../components/Contact/ContactInfo';

export default class Contact extends Component {
  render() {
    return (
      <>
        <ContactForm></ContactForm>
        <Map></Map>
        <ContactInfo></ContactInfo>
      </>
    );
  }
}
