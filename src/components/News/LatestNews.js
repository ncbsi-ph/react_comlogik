import React from 'react';

import { Section, Grid, Column } from '../Grid';

const LatestNews = () => {
  return (
    <Section className="gradient-bg-light">
      <Grid childWidth="1-1">
        <Column>
          <h1>Latest news</h1>
        </Column>
        <Column>
          <Grid childWidth="1-1 1-2@m" className="uk-flex-middle uk-card uk-card-default uk-grid-collapse uk-margin">
              <Column>
                <div class="uk-card-media-left uk-cover-container">
                  <img src="https://picsum.photos/600/400" alt="" uk-cover></img>
                </div>
              </Column>
              <Column>
                <div>
                  <div class="uk-card-body">
                    <h5 className="meta">JANUARY 01, 2020</h5>
                    <h3 className="uk-margin-remove">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                      felis massa, condimentum sit amet dignissim et, ornare a metus.
                      Nullam leo leo, euismod vehicula massa eget, bibendum hendrerit
                      diam. Fusce vel velit aliquet, molestie sapien pharetra, tempus
                      ante. <a className="link uk-text-bold">Read more</a>
                    </p>
                  </div>
                </div>
              </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default LatestNews;
