import React from 'react';

import { Section, Grid, Column } from '../Grid';

const Process = props => {
  return (
    <Grid childWidth="1-1 expand@l">
      <Column width="auto@l">
        <img className="uk-preserve" src={props.image} data-uk-svg=""></img>
      </Column>
      <Column className="uk-flex uk-flex-column">
        <h5 className="uk-margin-remove">{props.process}</h5>
        <p>{props.description}</p>
      </Column>
    </Grid>
  );
};

const WorkProcess = () => {
  return (
    <Section>
      <Grid childWidth="1-1 1-2@l" className="uk-flex-middle uk-text-center uk-text-left@l">
        <Column>
          <Grid childWidth="1-1">
            <Column>
              <h1>Our work process</h1>
            </Column>
            <Column width="1-2@s 1-1@l">
              <div data-uk-scrollspy="cls: uk-animation-slide-left; delay: 400">
                <Process
                  image="static/process-1.svg"
                  process="Project Planning"
                  description="All the components needed to set up the project success
                          will be described. It's the process you go through to
                          establish the steps required to define our project
                          objectives, clarify the scope of what needs to be done
                          and develop the task list to do it."
                />
              </div>
            </Column>
            <Column width="1-2@s 1-1@l">
              <div data-uk-scrollspy="cls: uk-animation-slide-right; delay: 500">
                <Process
                  image="static/process-2.svg"
                  process="Review Existing Process"
                  description="Current workflow/process will be discussed with the Project Team in order to define what can be utilized, improved or integrated to enhance the process or feature of the system."
                />
              </div>
            </Column>
            <Column width="1-2@s 1-1@l">
              <div data-uk-scrollspy="cls: uk-animation-slide-left; delay: 600">
                <Process
                  image="static/process-3.svg"
                  process="Training & Implementation"
                  description="This process includes the scheduling of trainees, training activities and the actual use of the software in a live environment. All end-users are primed and guided in the proper utilization of the software."
                />
              </div>
            </Column>
            <Column width="1-2@s 1-1@l">
              <div data-uk-scrollspy="cls: uk-animation-slide-right; delay: 700">
                <Process
                  image="static/process-4.svg"
                  process="Post Implementation Support"
                  description="Rapid response times and coordination of efforts are key success factors. As part of the implementation plan, super users are usually required additional trainings on troubleshooting to boost internal support."
                />
              </div>
            </Column>
          </Grid>
        </Column>
        <Column className="uk-flex-first uk-flex-last@l">
          <img src="static/about-process.gif"></img>
        </Column>
      </Grid>
    </Section>
  );
};

export default WorkProcess;
