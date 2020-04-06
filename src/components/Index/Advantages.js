import React from 'react';

import { Section, Grid, Column } from '../Grid';

const Advantage = props => {
  return (
    <Column>
      <Grid>
        <Column width="auto">
          <img className="uk-preserve" src={props.icon} data-uk-svg=""></img>
        </Column>
        <Column width="expand" className="uk-flex uk-flex-column">
          <h5 className="uk-margin-remove-bottom">{props.advantage}</h5>
          <p>{props.description}</p>
        </Column>
      </Grid>
    </Column>
  );
};

const Advantages = () => {
  return (
    <Section>
      <img className="cloud-1" src="static/cloud-1.svg" />
      <img className="cloud-2" src="static/cloud-2.svg" />
      <Grid childWidth="1-1">
        <Column className="uk-flex uk-flex-column uk-text-center uk-margin-large-bottom uk-margin-large-top">
          <h5 className="meta uk-margin-remove-bottom">ADVANTAGES</h5>
          <h1 className="margin-top-30">Why choose us?</h1>
          <p>Unbeatable advantages over any provider</p>
        </Column>
        <Column>
          <Grid childWidth="1-3">
            <Advantage
              icon="static/advantage-1.svg"
              advantage="Over 20 years of providing quality healthcare software"
              description="With more than 20 years of providing the best quality software for the healthcare industry."
            ></Advantage>
            <Advantage
              icon="static/advantage-2.svg"
              advantage="Widely used by 5000+ Doctors, Hospitals and Healthcare Facilities"
              description="Used by more than 5000 Doctors and Medical Practitioners with hundreds of hospital and healthcare facilities installations nationwide and growing."
            ></Advantage>
            <Advantage
              icon="static/advantage-3.svg"
              advantage="DOH & PhilHealth Certified Provider"
              description="Comlogik is the 1st Independent Software Provider to be validated by DOH and the most reliable eClaims Software Provider Certified by PhilHealth."
            ></Advantage>
            <Advantage
              icon="static/advantage-4.svg"
              advantage="24/7 Live Support"
              description="By constantly staying in contact with our clients through our live support app, we can answer questions and address problems easily. Customer comes first in everything we do and offer the next level service to create a seamless and the best experience possible."
            ></Advantage>
            <Advantage
              icon="static/advantage-5.svg"
              advantage="Tailor-fitted Implementation"
              description="Personalized implementation according to your own phasing and environment means a higher success of adaptability and a more relaxed way in learning a new system."
            ></Advantage>
            <Advantage
              icon="static/advantage-6.svg"
              advantage="Fast Transition"
              description="With a well-developed implementation process combined with our highly trained implementation team that will help you navigate the complex process of transitioning to a new system swiftly and with ease."
            ></Advantage>
            <Advantage
              icon="static/advantage-7.svg"
              advantage="Money Back Guarantee"
              description="We believe in our products that’s why we are very confident and we can back this up by offering a ‘Money Back Guarantee’ Agreement which no provider in the industry can match."
            ></Advantage>
            <Advantage
              icon="static/advantage-8.svg"
              advantage="Lifetime Software Warranty"
              description="Lifetime Software Warranty enables you to use the software as long as you want and not worry of having to pay extra for maintenance or additional cost on support and after sales services."
            ></Advantage>
            <Advantage
              icon="static/advantage-9.svg"
              advantage="Lifetime License and Maintenance"
              description="You only pay once for your software and no need to pay a monthly or yearly maintenance fee. The longer you use your software the more it pays off."
            ></Advantage>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default Advantages;
