import React from 'react';

import { Section, Grid, Column } from '../Grid';
import LogoCarousel from './LogoCarousel';

const Partners = () => {
  const logos_1 = [
    'Adventist-Medical-Center-Iligan.png',
    'Alabang-Medical-Center.jpg',
    'Alaminos-Doctors-Hospital.png',
    'Angeles-Medical-Center.jpg',
    'ASCCOM-Medical-Center.png',
    'Baguio-Medical-Center.jpg',
    'Bataan-Doctors-General-Hospital.jpg',
    'Bicol-Access-Health-Centrum.jpg',
    'Binakayan-Doctors-Hospital.jpg',
    'blessed-family-doctors-hospital.jpg'
  ];

  return (
    <Section>
      <Grid childWidth="1-1">
        <Column className="uk-flex uk-flex-column">
          <h5 className="meta uk-margin-remove-bottom">PARTNERS</h5>
          <h1 className="margin-top-30">Our company's good partners</h1>
          <p className="uk-margin-medium-bottom">
            Etiam ut pellentesque lectus, et euismod magna. Nulla neque mi,
            euismod et eleifend eu, scelerisque ac velit. Sed placerat imperdiet
            elementum.
          </p>
        </Column>
        <Column>
          <LogoCarousel
            logos={logos_1.map(logo => `static/logos/${logo}`)}
          ></LogoCarousel>
        </Column>
      </Grid>
    </Section>
  );
};

export default Partners;
