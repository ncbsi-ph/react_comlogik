import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from '../Grid';

const CaseStudy = ({ image, hospitalName, description, link }) => {
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
          <h5>{hospitalName}</h5>
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
      <Grid childWidth="1-1 1-2@l" className="uk-flex-middle">
        <Column className="uk-flex uk-flex-column">
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
                  hospitalName="Nazareth General Hospital"
                  description="Nazareth General Hospital increases income with Comlogik’s just-in-time inventory and quality reporting solution"
                  link="/clients/ngh"
                ></CaseStudy>
                <CaseStudy
                  image="https://scontent.fmnl6-2.fna.fbcdn.net/v/t31.0-8/p720x720/14125071_127803054338249_6779958521245930604_o.jpg?_nc_cat=111&_nc_sid=e007fa&_nc_ohc=QDCCUTT0CQkAX_9bd46&_nc_ht=scontent.fmnl6-2.fna&_nc_tp=6&oh=bef61b88bdd44cf6dd93933eb1784355&oe=5ED9B473"
                  hospitalName="Medical Mission Group Hospital Health Services Cooperative Palawan"
                  description="Defying the naysayers against new technology and the little known solutions provider"
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
