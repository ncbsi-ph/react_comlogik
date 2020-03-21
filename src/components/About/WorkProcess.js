import React, { Component } from 'react';

class Process extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="uk-child-width-expand" data-uk-grid>
          <div className="uk-width-auto">
            <img
              className="uk-preserve"
              src={this.props.image}
              data-uk-svg=""
            ></img>
          </div>
          <div className="uk-flex uk-flex-column">
            <h5 className="uk-margin-remove">{this.props.process}</h5>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default class WorkProcess extends Component {
  render() {
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-child-width-1-2 uk-flex-middle" data-uk-grid>
            <div>
              <div className="uk-child-width-1-1" data-uk-grid>
                <div>
                  <h1>Our work process</h1>
                </div>
                <Process
                  image="static/process-1.svg"
                  process="Project Planning"
                  description="All the components needed to set up the project success
                        will be described. It's the process you go through to
                        establish the steps required to define our project
                        objectives, clarify the scope of what needs to be done
                        and develop the task list to do it."
                ></Process>
                <Process
                  image="static/process-2.svg"
                  process="Review Existing Process"
                  description="Current workflow/process will be discussed with the Project Team in order to define what can be utilized, improved or integrated to enhance the process or feature of the system."
                ></Process>
                <Process
                  image="static/process-3.svg"
                  process="Training & Implementation"
                  description="This process includes the scheduling of trainees, training activities and the actual use of the software in a live environment. All end-users are primed and guided in the proper utilization of the software."
                ></Process>
                <Process
                  image="static/process-4.svg"
                  process="Post Implementation Support"
                  description="Rapid response times and coordination of efforts are key success factors. As part of the implementation plan, super users are usually required additional trainings on troubleshooting to boost internal support."
                ></Process>
              </div>
            </div>
            <div>
              <img src="static/about-process.gif"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
