import React, { Component } from 'react';

import { Section, Grid, Column } from '../Grid';

export default class TeamView extends Component {
  render() {
    return (
      <Section>
        <Grid childWidth="1-1">
          <Column className="uk-flex uk-flex-column uk-flex-center">
            <h5 className="uk-text-center">WHO WE ARE</h5>
            <h1 className="uk-text-center">Meet our awesome team</h1>
            <p className="uk-text-center">
              Our team consists of the most dynamic, talented people in the
              industry. We have passion on what we do, and are highly
              competitive individual bonded by our goal to innovate.
            </p>
          </Column>
          <Column className="uk-flex-">
            <ul data-uk-tab="">
              <li>
                <a>Management</a>
              </li>
              <li>
                <a>Development</a>
              </li>
              <li>
                <a>Implementation</a>
              </li>
              <li>
                <a>Technical</a>
              </li>
              <li>
                <a>Administration</a>
              </li>
            </ul>
            <ul className="uk-switcher uk-margin">
              <li>
                <Grid childWidth="expand">
                  <Column>
                    <img src="https://picsum.photos/200"></img>
                  </Column>
                  <Column>
                    <img src="https://picsum.photos/200"></img>
                  </Column>
                  <Column>
                    <img src="https://picsum.photos/200"></img>
                  </Column>
                  <Column>
                    <img src="https://picsum.photos/200"></img>
                  </Column>
                  <Column>
                    <img src="https://picsum.photos/200"></img>
                  </Column>
                </Grid>
              </li>
              <li>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur, sed do eiusmod.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur, sed do eiusmod.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur, sed do eiusmod.
              </li>
            </ul>
          </Column>
        </Grid>
      </Section>
    );
  }
}
