import React, { useEffect, useRef } from 'react';

import { Section, Grid, Column } from '../Grid';

const AccordionContent = (props) => {
  return (
    <li className="uk-padding-small" style={{ backgroundColor: '#D6E3F5' }}>
      <a className="uk-accordion-title">{props.title}</a>
      <Grid childWidth="1-1" className="uk-accordion-content">
        <Column>
          <img src={props.logo} />
        </Column>
        <Column>
          <span>{props.type}</span>
        </Column>
      </Grid>
    </li>
  );
};

const Ecosystem = () => {
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const ctx = canvasRef.current.getContext('2d');
    img.onload = () => {
      canvasRef.current.width = img.naturalWidth;
      canvasRef.current.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
      // Plot here using ctx
    };
  }, []);

  return (
    <Section>
      <Grid childWidth="1-1 expand@m" className="uk-flex-middle">
        <Column width="1-3@m" className="uk-flex-column">
          <h2>Comlogik Ecosystem</h2>
          <p>
            Comlogik’s ecosystem goes beyond just interoperability. It involves
            the connection between users, applications and the company, and how
            Comlogik treats its customers.
          </p>
        </Column>
        <Column>
          <img ref={imgRef} src="static/ecosystem.svg" hidden />
          <canvas
            ref={canvasRef}
            className="uk-width-1-1 uk-visible@m"
          ></canvas>
          <div className="uk-card uk-card-default uk-card-body uk-hidden@m">
            <h4>MAIN SOFTWARE</h4>
            <img src="static/product-1.png" width={400} />
          </div>
          <ul data-uk-accordion="" className="uk-hidden@m">
            <AccordionContent
              title="ClaimsAssure"
              logo="static/product-3.png"
              type="PhilHealth EClaims System"
            />
            <AccordionContent
              title="PharmaTrax"
              logo="static/product-2.png"
              type="Test type"
            />
            <AccordionContent
              title="PayManager"
              logo="static/product-2.png"
              type="Test type"
            />
            <AccordionContent
              title="Clinic IMS"
              logo="static/product-2.png"
              type="Test type"
            />
            <AccordionContent
              title="EMR"
              logo="static/product-2.png"
              type="Test type"
            />
          </ul>
        </Column>
      </Grid>
    </Section>
  );
};

export default Ecosystem;
