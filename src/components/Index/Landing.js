import React from 'react';

<<<<<<< HEAD
export default class Landing extends Component {
  render() {
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-flex-middle" data-uk-grid>
            <div className="uk-width-1-2">
              <div className="uk-flex uk-flex-column">
              <img className="logo-bg" src="static/logo-bg.svg" />
              <img className="landing-bg-1" src="static/landing-bg-1.svg" />
                <h1>Beyond Just Information</h1>
                <p className="sub-header">
                  Comlogik is the single source solution provider to all your
                  healthcare information technology needs.
                </p>
                <div>
                  <button className="uk-button uk-button-secondary uk-margin-right">
                    Request a Demo
                  </button>
                  <button className="uk-button secondary-outline">
                    Comlogik Ecosystem
                  </button>
                </div>
              </div>
            </div>
            <div className="uk-width-expand">
              <img src="static/landing-img.gif"></img>
            </div>
=======
import { Section, Grid, Column } from '../Grid';

const Landing = () => {
  return (
    <Section>
      <Grid childWidth="expand" className="uk-flex-middle">
        <Column width="1-2" className="uk-flex uk-flex-column">
          <h1 className="uk-margin-remove">Beyond Just Information</h1>
          <p>
            Comlogik is the single source solution provider to all your
            healthcare information technology needs.
          </p>
          <div>
            <button className="uk-button uk-button-primary uk-margin-right">
              Request a demo
            </button>
            <button className="uk-button uk-button-default">
              Comlogik Ecosystem
            </button>
>>>>>>> 2d3cb4f0a52a4b724dabfb923f7d02fb4723bdf5
          </div>
        </Column>
        <Column>
          <img data-src="static/landing-img.gif" data-uk-img=""></img>
        </Column>
      </Grid>
    </Section>
  );
};

export default Landing;
