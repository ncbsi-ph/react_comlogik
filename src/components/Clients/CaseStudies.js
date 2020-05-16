import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from '../Grid';

const CaseStudy = ({ image, date, hospitalName, description, link }) => {
  return (
    <Column>
      <Grid
        childWidth="expand"
        className="uk-card uk-card-default rounded uk-grid-collapse"
      >
        <Column
          width="1-3"
          className="uk-card-media-left uk-cover-container uk-visible@s"
        >
          <img
            src={image}
            data-uk-cover=""
            className="rounded-testimonials"
          ></img>
        </Column>
        <Column className="uk-card-body uk-flex-column">
          <small className="uk-display-block uk-text-muted uk-margin-bottom">{date}</small>
          <h4 className="uk-margin-remove">{hospitalName}</h4>
          <p>{description}</p>
          <div>
            <Link to={link} className="uk-button uk-button-primary">
              Learn more
            </Link>
          </div>
        </Column>
      </Grid>
    </Column>
  );
};

const CaseStudies = () => {
  return (
    <Section className="gradient-bg-light">
      <Grid childWidth="1-1 expand@l" className="uk-flex-middle">
        <Column width="1-3@l" className="uk-flex uk-flex-column">
          <h1 className="uk-margin-remove">Client Successes</h1>
          <p>
            It’s always personal for us when we hear success stories of our
            customers. Such news brings joy and satisfaction which motivates us
            to continue what we do – provide outstanding products, exceptional
            services that delights and supports their intentions in bringing
            care back to healthcare.
            <br />
            <br />
            When we see our them transforming from when we first came to their
            organization – adding more facilities, increasing quality of care,
            reducing waste, lowering costs and growing clientele - we celebrate
            their efforts and share the wisdom they gained by their success.
          </p>
        </Column>
        <Column>
          <Grid className="uk-grid-small" data-uk-height-match="target: > div">
            <Column className="uk-width-expand">
              <Grid childWidth="1-1">
                <CaseStudy
                  image="https://live.staticflickr.com/2800/4471874520_880346341d_b.jpg"
                  date="JANUARY 2020 / CLIENT SUCCESSES"
                  hospitalName="Achieving better outcomes thru just - in - time inventory and operational efficiency"
                  description="In 2004, Nazareth General Hospital was using manual process and paper based records which resulted in laborious workflow"
                  link="/clients/ngh"
                ></CaseStudy>
                <CaseStudy
                  image="https://scontent.fymy1-1.fna.fbcdn.net/v/t1.0-0/p180x540/37600707_1810522419061190_637445701608931328_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_eui2=AeHzyubilCqwr14g8SOz91j8jx_CWQmxFsiPH8JZCbEWyEDom9EoI5U5HHCpkc6nPgc&_nc_oc=AQlPDIoV-mvgQdhqCQ9ATtVBDVTk5PQ03ljmU2_e99WT48hAUAVRAEJbzjUKDtnumhyYRoQjdWYTcWRIEo_5brwz&_nc_ht=scontent.fymy1-1.fna&_nc_tp=6&oh=84f8171ca2211f412c55f94efbbcf276&oe=5ED3AE6A"
                  date="FEBRUARY 2020 / CLIENT SUCCESSES"
                  hospitalName="Defying the naysayers against new technology and little known solutions provider"
                  description="MMMHHSC Palawan’s decision to use a technology that’s new and untried made the big difference in their future."
                  link="/clients/mmghhscp"
                ></CaseStudy>
              </Grid>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default CaseStudies;
