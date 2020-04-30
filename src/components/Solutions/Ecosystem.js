import React, { useEffect, useRef } from 'react';

import { Section, Grid, Column } from '../Grid';

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
      <Grid childWidth="expand" className="uk-flex-middle">
        <Column width="1-3" className="uk-flex-column">
          <h2>Comlogik Ecosystem</h2>
          <p>
            Comlogik’s ecosystem goes beyond just interoperability. It involves
            the connection between users, applications and the company, and how
            Comlogik treats its customers.
          </p>
        </Column>
        <Column>
          <img ref={imgRef} src="static/ecosystem.svg" hidden />
          <canvas ref={canvasRef} className="uk-width-1-1"></canvas>
        </Column>
      </Grid>
    </Section>
  );
};

export default Ecosystem;
