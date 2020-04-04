import React from 'react';

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            finibus nulla quis ligula auctor, at pretium orci eleifend. Maecenas
            non lacus eget massa pretium ornare in at ante. Cras id posuere
            eros. Ut tempus ex ut mi tristique mollis. Suspendisse ac elit non
            nunc consequat molestie quis in nisl.
          </p>
          <div className="uk-margin-medium-top">
            <a className="uk-button uk-button-primary">Join our team</a>
          </div>
        </Column>
      </Grid>
    </Section>
  );
};

export default Team;
