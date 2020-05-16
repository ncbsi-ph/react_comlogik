import React from 'react';

import { Section, Grid, Column } from '../Grid';

const Advantage = (props) => {
  return (
    <Column>
      <Grid>
        <Column width="auto">
          <img className="uk-preserve" src={props.icon} data-uk-svg=""></img>
        </Column>
        <Column
          width="expand"
          className="uk-flex uk-flex-column"
          style={{ position: 'relative' }}
        >
          <span
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '10rem',
              color: '#cc3396',
              zIndex: '-1000',
              opacity: 0.1,
            }}
          >
            {props.number}
          </span>
          <h3 className="uk-margin-remove">{props.advantage}</h3>
          <p>{props.description}</p>
        </Column>
      </Grid>
    </Column>
  );
};

const Advantages = () => {
  return (
    <Section>
      <img className="cloud-1" src="static/cloud-1.svg" hidden />
      <img className="cloud-2" src="static/cloud-2.svg" hidden />
      <Grid childWidth="1-1">
        <Column className="uk-flex uk-flex-column uk-text-center uk-margin-large-bottom uk-margin-large-top">
          <h5 className="meta uk-margin-remove-bottom">ADVANTAGES</h5>
          <h1 className="margin-top-30">
            9 reasons why we’re the right healthcare software provider for you
          </h1>
          <p>Unbeatable advantages and value over any other provider</p>
        </Column>
        <Column>
          <div className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@l" data-uk-grid="" data-uk-scrollspy="cls: uk-animation-scale-up; target: > div; delay:500; repeat: false">
            <Advantage
              icon="static/advantage-1.svg"
              advantage="Over 20 years of providing quality healthcare software"
              description="With more than 20 years of providing the best quality software for the healthcare industry."
              number="1"
            ></Advantage>
            <Advantage
              icon="static/advantage-2.svg"
              advantage="Widely used by 5000+ Doctors, Hospitals and Healthcare Facilities"
              description="Used by more than 5000 Doctors and Medical Practitioners with hundreds of hospital and healthcare facilities installations nationwide and growing."
              number="2"
            ></Advantage>
            <Advantage
              icon="static/advantage-3.svg"
              advantage="DOH & PhilHealth Certified Provider"
              description="Comlogik is the 1st Independent Software Provider to be validated by DOH and the most reliable eClaims Software Provider Certified by PhilHealth."
              number="3"
            ></Advantage>
            <Advantage
              icon="static/advantage-4.svg"
              advantage="24/7 Live Support"
              description="By constantly staying in contact with our clients through our live support app, we can answer questions and address problems easily. Customer comes first in everything we do and offer the next level service to create a seamless and the best experience possible."
              number="4"
            ></Advantage>
            <Advantage
              icon="static/advantage-5.svg"
              advantage="Tailor-fitted Implementation"
              description="Personalized implementation according to your own phasing and environment means a higher success of adaptability and a more relaxed way in learning a new system."
              number="5"
            ></Advantage>
            <Advantage
              icon="static/advantage-6.svg"
              advantage="Fast Transition"
              description="With a well-developed implementation process combined with our highly trained implementation team that will help you navigate the complex process of transitioning to a new system swiftly and with ease."
              number="6"
            ></Advantage>
            <Advantage
              icon="static/advantage-7.svg"
              advantage="Money Back Guarantee"
              description="We believe in our products that’s why we are very confident and we can back this up by offering a ‘Money Back Guarantee’ Agreement which no provider in the industry can match."
              number="7"
            ></Advantage>
            <Advantage
              icon="static/advantage-8.svg"
              advantage="Lifetime Software Warranty"
              description="Lifetime Software Warranty enables you to use the software as long as you want and not worry of having to pay extra for maintenance or additional cost on support and after sales services."
              number="8"
            ></Advantage>
          </div>
        </Column>
      </Grid>
    </Section>
  );
};

export default Advantages;
