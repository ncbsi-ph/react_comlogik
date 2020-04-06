import React from 'react';

import { Section, Grid, Column } from '../Grid';

const LatestNews = () => {
  return (
    <Section>
      <Grid childWidth="1-1">
        <Column>
          <h1>Latest news</h1>
        </Column>
        <Column>
          <Grid childWidth="1-1 1-2@m" className="uk-flex-middle">
            <Column>
              <img
                data-src="https://picsum.photos/600/300"
                data-uk-img=""
              ></img>
            </Column>
            <Column className="uk-flex uk-flex-column">
              <h5>JANUARY 01, 2020</h5>
              <h3 className="uk-margin-remove">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                felis massa, condimentum sit amet dignissim et, ornare a metus.
                Nullam leo leo, euismod vehicula massa eget, bibendum hendrerit
                diam. Fusce vel velit aliquet, molestie sapien pharetra, tempus
                ante. Integer mollis, lorem sit amet congue luctus
              </p>
              <div>
                <a>Read more</a>
              </div>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default LatestNews;
