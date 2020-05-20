import React from 'react';

import { Section, Grid, Column } from '../Grid';
import { Icon } from '@iconify/react';

import people from '@iconify/icons-feather/user';
import calendar from '@iconify/icons-feather/calendar';
import work from '@iconify/icons-feather/briefcase';

const Job = ({
  title,
  openPositions,
  openUntil,
  workExperience,
  description,
}) => {
  return (
    <Column>
      <Grid childWidth="1-1">
        <Column>
          <h3 className="text-black">{title}</h3>
        </Column>
        <Column className="uk-margin-top">
          <Grid childWidth="auto">
            <Column className="uk-text-bold uk-flex uk-flex-middle uk-flex-center">
              <div className="uk-margin-small-right">
                <Icon icon={people} width={24} height={24}></Icon>
              </div>
              <div>
                {`${openPositions} positions`}
              </div>
            </Column>
            <Column className="uk-text-bold uk-flex uk-flex-middle">
              <div className="uk-margin-small-right">
                <Icon icon={calendar} width={24} height={24}></Icon>
              </div>
              <div>
                {`Open until ${openUntil}`}
              </div>
            </Column>
            <Column className="uk-text-bold uk-flex uk-flex-middle">
              <div className="uk-margin-small-right">
                <Icon icon={work} width={24} height={24}></Icon>
              </div>
              <div>
                {`Minimum of ${workExperience} years work related experience`}
              </div>
            </Column>
          </Grid>
        </Column>
        <Column>
          <p>{description}</p>
        </Column>
      </Grid>
    </Column>
  );
};

const Jobs = () => {
  return (
    <Section>
      <Grid childWidth="1-1">
        <Column className="uk-flex uk-flex-between uk-flex-middle">
          <h2 className="uk-margin-remove uk-display-inline-block">
            Open Positions
          </h2>
          <span>Two positions available</span>
        </Column>
        <Column>
          <Grid childWidth="1-1">
            <Column>
              <a href="#job-details" data-uk-toggle="" type="button" className="job-modal">
                <div className="gray-bg uk-padding">
                  <Job
                    title="HR Officer"
                    openPositions="1"
                    openUntil="May 30"
                    workExperience="2-3"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel purus id sapien condimentum rhoncus vel sit amet diam. Etiam dui augue, malesuada at lectus quis, scelerisque faucibus leo. In hac habitasse platea dictumst."
                  />
                </div>
              </a>
            </Column>
            <Column>
              <div className="gray-bg uk-padding">
                <Job
                  title="HR Officer"
                  openPositions="1 "
                  openUntil="Undefined"
                  workExperience="2-3"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel purus id sapien condimentum rhoncus vel sit amet diam. Etiam dui augue, malesuada at lectus quis, scelerisque faucibus leo. In hac habitasse platea dictumst."
                />
              </div>
            </Column>
          </Grid>
        </Column>
      </Grid>

      <div id="job-details" class="uk-modal-container" data-uk-modal="">
        <div class="uk-modal-dialog uk-modal-body">
          <button class="uk-modal-close-default" type="button" data-uk-close=""></button>
          <Grid childWidth="1-1">
            <Column>
              <h3 className="text-black">HR Officer</h3>
            </Column>
            <Column className="uk-margin-top">
              <Grid childWidth="auto">
                <Column className="uk-text-bold uk-flex uk-flex-middle uk-flex-center">
                  <div className="uk-margin-small-right">
                    <Icon icon={people} width={24} height={24}></Icon>
                  </div>
                  <div>
                    1 open position
                  </div>
                </Column>
                <Column className="uk-text-bold uk-flex uk-flex-middle">
                  <div className="uk-margin-small-right">
                    <Icon icon={calendar} width={24} height={24}></Icon>
                  </div>
                  <div>
                    Open until May 30
                  </div>
                </Column>
                <Column className="uk-text-bold uk-flex uk-flex-middle">
                  <div className="uk-margin-small-right">
                    <Icon icon={work} width={24} height={24}></Icon>
                  </div>
                  <div>
                    Minimum of 2-3 years work related experience
                  </div>
                </Column>
              </Grid>
            </Column>
            <Column>
              <h5>Job Description</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis iaculis dui. In hac habitasse platea dictumst. Quisque lobortis lorem sit amet lorem sagittis, at placerat odio sollicitudin. Phasellus varius suscipit felis eget elementum. Aliquam eros risus, tempor nec odio nec, egestas vestibulum leo. Pellentesque tincidunt nulla eget nisi finibus, non congue quam vehicula. Nullam at quam lacinia, gravida tellus et, gravida lectus. Suspendisse commodo est id vulputate ultricies. Donec eget aliquet lacus. Morbi augue arcu, facilisis in est eget, dignissim malesuada turpis. Vivamus placerat justo ac leo aliquet blandit. Aliquam nunc nulla, malesuada dignissim justo a, faucibus volutpat eros. Maecenas quis eros nec felis pellentesque tristique. Proin et venenatis ipsum.</p>
            </Column>
            <Column>
              <h5>Job Requirements</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis iaculis dui. In hac habitasse platea dictumst. Quisque lobortis lorem sit amet lorem sagittis, at placerat odio sollicitudin. Phasellus varius suscipit felis eget elementum. Aliquam eros risus, tempor nec odio nec, egestas vestibulum leo. Pellentesque tincidunt nulla eget nisi finibus, non congue quam vehicula. Nullam at quam lacinia, gravida tellus et, gravida lectus. Suspendisse commodo est id vulputate ultricies. Donec eget aliquet lacus. Morbi augue arcu, facilisis in est eget, dignissim malesuada turpis. Vivamus placerat justo ac leo aliquet blandit. Aliquam nunc nulla, malesuada dignissim justo a, faucibus volutpat eros. Maecenas quis eros nec felis pellentesque tristique. Proin et venenatis ipsum.</p>
            </Column>
            <Column>
              <div className="gradient-bg-light uk-padding">
                <h3>Apply for this position</h3>
                <form>
                  <div class="uk-grid-small" data-uk-grid="">
                    <div class="uk-width-auto uk-flex uk-flex-right uk-flex-middle">
                      <label class="uk-form-label" for="name">Full Name</label>
                    </div>
                    <div class="uk-width-expand">
                      <input class="uk-input" type="text" id="name" />
                    </div>
                    <div class="uk-width-auto uk-flex uk-flex-right uk-flex-middle">
                      <label class="uk-form-label" for="gender">Gender</label>
                    </div>
                    <div class="uk-width-1-5">
                      <select class="uk-select" id="gender">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                  <div class="uk-grid-small" data-uk-grid="">
                    <div class="uk-width-auto uk-flex uk-flex-right uk-flex-middle">
                      <label class="uk-form-label" for="email">Email Address</label>
                    </div>
                    <div class="uk-width-expand">
                      <input class="uk-input" type="text" id="email" />
                    </div>
                    <div class="uk-width-auto uk-flex uk-flex-right uk-flex-middle">
                      <label class="uk-form-label" for="mobile">Mobile Number</label>
                    </div>
                    <div class="uk-width-expand">
                      <input class="uk-input" type="text" id="mobile" />
                    </div>
                  </div>
                  <div class="uk-grid-small" data-uk-grid="">
                    <div className="uk-width-expand">
                      <input class="uk-input" type="text" placeholder="Upload your CV or Resume" disabled />
                    </div>
                  </div>
                  <div class="uk-grid-small" data-uk-grid="">
                    <div className="uk-width-expand">
                      <label>
                        <input class="uk-checkbox uk-margin-right" type="checkbox" checked />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </label>
                    </div>
                  </div>
                  <div className="uk-margin-top">
                    <button className="uk-button uk-button-primary" type="submit">Submit your application</button>
                  </div>
                </form>
              </div>
            </Column>
          </Grid>
        </div>
      </div>
    </Section>
  );
};

export default Jobs;
