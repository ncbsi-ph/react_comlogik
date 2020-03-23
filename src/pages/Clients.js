import React, { Component } from 'react';

import { Section } from '../components/Grid';
import CommonHeader from '../components/CommonHeader';
import LogoCarousel from '../components/Clients/LogoCarousel';
import Partners from '../components/Clients/Partners';
import CTA from '../components/CTA';

export default class Clients extends Component {
  render() {
    return (
      <>
        <CommonHeader
          svg={true}
          image="static/clients.svg"
          label="CLIENTS"
          heading="Placeholder client heading"
          sentence="Etiam ut pellentesque lectus, et euismod magna. Nulla neque mi, euismod et eleifend eu, scelerisque ac velit. Sed placerat imperdiet elementum. Cras blandit nulla magna, sed malesuada ante laoreet sit amet. Maecenas non blandit justo. Donec velit ante, varius id libero sit amet, dictum tempor risus."
        ></CommonHeader>
        <Section removePadding="horizontal" container={false}>
          <LogoCarousel></LogoCarousel>
          <LogoCarousel></LogoCarousel>
          <LogoCarousel></LogoCarousel>
        </Section>
        <Partners></Partners>
        <CTA></CTA>
      </>
    );
  }
}
