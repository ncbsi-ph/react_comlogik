import React from 'react';

<<<<<<< HEAD
export default class Team extends Component {
  render() {
    return (
      <div className="uk-section">
        <img className="team-bg" src="static/team-bg.png" />
        <div className="uk-container uk-margin-large-top">
          <div className="uk-child-width-1-2 uk-flex-middle" data-uk-grid>
            <div>
              <img src="static/team.gif"></img>
            </div>
            <div className="uk-flex uk-flex-column">
              <h5 className="meta uk-margin-remove-bottom">ABOUT</h5>
              <h1 className="margin-top-30">Meet our awesome team</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum finibus nulla quis ligula auctor, at pretium orci
                eleifend. Maecenas non lacus eget massa pretium ornare in at
                ante. Cras id posuere eros. Ut tempus ex ut mi tristique mollis.
                Suspendisse ac elit non nunc consequat molestie quis in nisl.
              </p>
              <div className="uk-margin-medium-top">
                <a className="uk-button uk-button-primary">Join our team</a>
              </div>
            </div>
=======
import { Section, Grid, Column } from '../Grid';

const Team = () => {
  return (
    <Section>
      <Grid childWidth="1-2" className="uk-flex-middle">
        <Column>
          <img src="static/team.gif"></img>
        </Column>
        <Column className="uk-flex uk-flex-column">
          <h5>ABOUT</h5>
          <h1 className="uk-margin-remove">Meet our awesome team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            finibus nulla quis ligula auctor, at pretium orci eleifend. Maecenas
            non lacus eget massa pretium ornare in at ante. Cras id posuere
            eros. Ut tempus ex ut mi tristique mollis. Suspendisse ac elit non
            nunc consequat molestie quis in nisl.
          </p>
          <div>
            <a className="uk-button uk-button-primary">Join our team</a>
>>>>>>> 2d3cb4f0a52a4b724dabfb923f7d02fb4723bdf5
          </div>
        </Column>
      </Grid>
    </Section>
  );
};

export default Team;
