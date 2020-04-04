import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Section, Grid, Column } from '../Grid';

const TeamTab = props => {
  return (
    <Column>
      <button className="uk-button uk-button-primary" type="button">
        {props.label}
      </button>
    </Column>
  );
};

const Profile = props => {
  return (
    <Column>
      <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
        <img src={props.image}></img>
        <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
          <h5 className="uk-margin-remove">{props.name}</h5>
          <p>{props.role}</p>
        </div>
      </div>
    </Column>
  );
};

const TeamView = () => {
  const data = {
    Management: [
      {
        image: 'https://picsum.photos/300/250?random=1',
        name: 'Employee 1',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=2',
        name: 'Employee 2',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=3',
        name: 'Employee 3',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=4',
        name: 'Employee 4',
        role: 'Placeholder Role (PR)'
      }
    ],
    Development: [
      {
        image: 'https://picsum.photos/300/250?random=5',
        name: 'Employee 1',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=6',
        name: 'Employee 2',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=7',
        name: 'Employee 3',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=8',
        name: 'Employee 4',
        role: 'Placeholder Role (PR)'
      }
    ],
    Implementation: [
      {
        image: 'https://picsum.photos/300/250?random=9',
        name: 'Employee 1',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=10',
        name: 'Employee 2',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=11',
        name: 'Employee 3',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=12',
        name: 'Employee 4',
        role: 'Placeholder Role (PR)'
      }
    ],
    Technical: [
      {
        image: 'https://picsum.photos/300/250?random=13',
        name: 'Employee 1',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=14',
        name: 'Employee 2',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=15',
        name: 'Employee 3',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=16',
        name: 'Employee 4',
        role: 'Placeholder Role (PR)'
      }
    ],
    Administration: [
      {
        image: 'https://picsum.photos/300/250?random=17',
        name: 'Employee 1',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=18',
        name: 'Employee 2',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=19',
        name: 'Employee 3',
        role: 'Placeholder Role (PR)'
      },
      {
        image: 'https://picsum.photos/300/250?random=20',
        name: 'Employee 4',
        role: 'Placeholder Role (PR)'
      }
    ]
  };
  const tabs = [];
  const employees = [];

  for (const [key, value] of Object.entries(data)) {
    tabs.push(<TeamTab key={tabs.length} label={key}></TeamTab>);
    const content = [];
    value.forEach(_content => {
      content.push(
        <Profile
          key={content.length}
          image={_content.image}
          name={_content.name}
          role={_content.role}
        ></Profile>
      );
    });
    employees.push(
      <li key={employees.length}>
        <Grid childWidth="1-2 1-3@m 1-4@l">{content}</Grid>
      </li>
    );
  }

  return (
    <Section>
      <Grid childWidth="1-1">
        <Column className="uk-flex uk-flex-column uk-text-center">
          <h5>WHO WE ARE</h5>
          <h1 className="uk-margin-remove">Meet our awesome team</h1>
          <p>
            Our team consists of the most dynamic, talented people in the
            industry. We have passion on what we do, and are highly competitive
            individual bonded by our goal to innovate.
          </p>
        </Column>
        <Column>
          <div
            className="uk-grid-small uk-flex uk-flex-center"
            data-uk-switcher="animation: uk-animation-fade; toggle: > *"
            data-uk-grid=""
          >
            {tabs}
          </div>
          <ul className="uk-switcher uk-margin-medium-top">{employees}</ul>
        </Column>
      </Grid>
    </Section>
  );
};

TeamTab.propTypes = {
  label: PropTypes.string.isRequired
};

Profile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

export default TeamView;
