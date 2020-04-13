import React from 'react';

import { Section, Grid, Column } from '../components/Grid';

const NewsContent = props => {
  return (
    <>
      <Section className="gradient-bg-light">
        <h1 className="uk-text-center">News</h1>
        <div className="uk-flex uk-flex-center uk-margin-top">
          <ul class="uk-breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><span className="active">Lorem ipsum dolor sit amet</span></li>
          </ul>
        </div>
      </Section>
      <Section>
        <Grid childWidth="1-1 1-2@m">
          <Column className="uk-flex uk-flex-column uk-width-expand">
            <h5 className="meta">DECEMBER 11, 2019</h5>
            <h1 className="uk-margin-remove">Lorem ipsum dolor sit amet</h1>
            <div className="uk-width-1-1 uk-margin-medium uk-margin-remove-horizontal">
              <img src="https://picsum.photos/800/500"></img>
            </div>
            <p>
              Quisque facilisis elit enim, pretium rhoncus lacus dictum ac. Duis
              vitae dui vitae turpis bibendum ultrices at at arcu. Duis vel velit
              dui. Nulla sodales, elit id laoreet commodo, turpis nisi finibus
              ipsum, sit amet sodales felis nunc non magna. Mauris auctor neque in
              dui ultrices, vitae ultricies justo dignissim. Morbi ex tortor,
              feugiat ac rhoncus sed, placerat eu neque. Vestibulum semper leo non
              justo congue tincidunt. Vivamus pellentesque accumsan dui, eget
              placerat turpis blandit non. Fusce tincidunt justo nunc, nec laoreet
              justo vulputate porta. Cras lacinia rhoncus turpis non consequat.
              Donec velit mi, pharetra eget ex ut, semper semper ante. Ut a
              vehicula sapien, nec commodo neque. In elementum, massa nec ornare
              maximus, nisi lacus pulvinar nisl, sed tincidunt eros erat et ante.
              Cras lorem lectus, malesuada sed arcu non, varius commodo justo.
              Nunc rutrum diam sapien, vel pretium sem tristique et. Aenean lacus
              ex, fringilla ac commodo et, tempus eget ligula. Nunc sed molestie
              magna, in dictum magna. Proin porta finibus turpis, nec rhoncus leo
              lacinia quis. Aliquam sed dui tortor. Ut nec elementum risus, at
              vehicula lectus. Morbi in neque ut orci tempor vehicula. Proin lorem
              ligula, aliquam vel suscipit id, sagittis ac sapien. In porttitor
              vitae leo a aliquam. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Proin iaculis convallis
              libero a tincidunt. Mauris sed accumsan leo, ac elementum diam. Nam
              interdum porta libero ac hendrerit. Proin gravida lectus vitae neque
              suscipit, vel suscipit neque commodo. Curabitur vitae auctor dolor.
              Sed consectetur fringilla nibh id tristique.
            </p>
            <h5>TAGS</h5>
            <div>
              <Grid childWidth="auto" className="uk-grid-small">
                <Column>
                  <span className="uk-badge">Test</span>
                </Column>
                <Column>
                  <span className="uk-badge">Test</span>
                </Column>
              </Grid>
            </div>
          </Column>
          <Column className="uk-width-1-3">
            <Grid childWidth="1-1" className="uk-padding">
              <div className="gray-bg uk-padding">
                <h4 className="uk-margin-remove-bottom">Other news</h4>
                <Column>
                  <Grid childWidth="1-2" className="uk-flex-middle uk-card uk-card-default uk-grid-collapse uk-margin">
                    <Column className="uk-width-auto">
                      <div class="uk-card-media-left uk-cover-container">
                        <img src="https://picsum.photos/100" uk-cover></img>
                      </div>
                    </Column>
                    <Column>
                      <div>
                          <div class="uk-card-body">
                            <p>Lorem ipsum dolor sit amet</p>
                          </div>
                      </div>
                    </Column>
                  </Grid>
                </Column>
              </div>
            </Grid>
          </Column>
        </Grid>
      </Section>
    </>
  );
};

export default NewsContent;
