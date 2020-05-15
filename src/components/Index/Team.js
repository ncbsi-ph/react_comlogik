import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from '../Grid';

const Team = () => {
  return (
    <Section>
      <Grid childWidth="1-1 1-2@m" className="uk-flex-middle">
        <Column>
          <img src="static/team.gif"></img>
        </Column>
        <Column className="uk-flex uk-flex-column">
          <h5 className="meta uk-margin-remove-bottom">ABOUT</h5>
          <h1 className="margin-top-30">Meet our awesome team</h1>
          <p>
            Some say skill is the most important quality one has when joining a
            company, but in Comlogik, we consider character to be just as
            important. Put together superb talent and outstanding character and
            you’ve got a winner!
            <br />
            <br />
            Our values is the heart of Comlogik. From here stems the quality of
            our performance and work today, and in the future.
          </p>
          <div className="uk-margin-small-top">
            <Link to="/about" className="uk-button uk-button-primary">
              Meet our team
            </Link>
          </div>
        </Column>
      </Grid>
    </Section>
  );
};

export default Team;
