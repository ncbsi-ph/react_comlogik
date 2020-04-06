import React from 'react';

import { Section, Grid, Column } from '../components/Grid';
import CTA from '../components/CTA';

const ProductContent = props => {
  return (
    <>
      <Section>
        <Grid childWidth="1-1 1-2@m" className="uk-flex-middle">
          <Column>
            <img src="static/product-sample.png"></img>
          </Column>
          <Column className="uk-flex uk-flex-column">
            <h5>SOLUTION</h5>
            <h1 className="uk-margin-remove">Electronic Medical Record</h1>
            <p>
              Quisque facilisis elit enim, pretium rhoncus lacus dictum ac. Duis
              vitae dui vitae turpis bibendum ultrices at at arcu.
            </p>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid childWidth="1-1" className="uk-text-center">
          <Column>
            <img src="static/product-4.png"></img>
          </Column>
          <Column>
            <p>
              Quisque facilisis elit enim, pretium rhoncus lacus dictum ac. Duis
              vitae dui vitae turpis bibendum ultrices at at arcu. Duis vel
              velit dui. Nulla sodales, elit id laoreet commodo, turpis nisi
              finibus ipsum, sit amet sodales felis nunc non magna. Mauris
              auctor neque in dui ultrices, vitae ultricies justo dignissim.
              Morbi ex tortor, feugiat ac rhoncus sed, placerat eu neque.
              Vestibulum semper leo non justo congue tincidunt. Vivamus
              pellentesque accumsan dui, eget placerat turpis blandit non. Fusce
              tincidunt justo nunc, nec laoreet justo vulputate porta. Cras
              lacinia rhoncus turpis non consequat. Donec velit mi, pharetra
              eget ex ut, semper semper ante.
            </p>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid childWidth="1-1 1-2@m" className="uk-flex-middle">
          <Column>
            <Grid childWidth="1-1">
              <Column>
                <h1 className="uk-margin-remove">Why choose our software</h1>
              </Column>
              <Column>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum finibus nulla quis ligula auctor, at pretium orci
                  eleifend.
                </p>
              </Column>
              <Column>
                <Grid childWidth="1-1" className="uk-grid-small">
                  <Column>
                    <Grid childWidth="expand">
                      <Column width="auto">
                        <img
                          src="static/check.svg"
                          className="uk-preserve"
                          width="32"
                          data-uk-svg=""
                        ></img>
                      </Column>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum finibus nulla quis ligula auctor, at pretium
                        orci eleifend.
                      </p>
                    </Grid>
                  </Column>
                  <Column>
                    <Grid childWidth="expand">
                      <Column width="auto">
                        <img
                          src="static/check.svg"
                          className="uk-preserve"
                          width="32"
                          data-uk-svg=""
                        ></img>
                      </Column>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum finibus nulla quis ligula auctor, at pretium
                        orci eleifend.
                      </p>
                    </Grid>
                  </Column>
                  <Column>
                    <Grid childWidth="expand">
                      <Column width="auto">
                        <img
                          src="static/check.svg"
                          className="uk-preserve"
                          width="32"
                          data-uk-svg=""
                        ></img>
                      </Column>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum finibus nulla quis ligula auctor, at pretium
                        orci eleifend.
                      </p>
                    </Grid>
                  </Column>
                </Grid>
              </Column>
            </Grid>
          </Column>
          <Column>
            <img data-src="https://picsum.photos/500" data-uk-img=""></img>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid childWidth="1-1">
          <Column>
            <h1 className="uk-margin-remove uk-text-center">
              Comlogik EMR has always been one of the best Electronic Medical
              Record software
            </h1>
          </Column>
          <Column>
            <Grid childWidth="1-1 1-3@s 1-4@m" className="uk-flex-center">
              <Column>
                <Grid childWidth="1-1" className="uk-text-center">
                  <Column>
                    <img src="static/emr-1.svg" className="uk-preserve"></img>
                  </Column>
                  <Column>
                    <p>First EMR software to be accredited by DOH</p>
                  </Column>
                </Grid>
              </Column>
              <Column>
                <Grid childWidth="1-1" className="uk-text-center">
                  <Column>
                    <img src="static/emr-2.svg" className="uk-preserve"></img>
                  </Column>
                  <Column>
                    <p>
                      Industry standard and secure software that can be easily
                      learned
                    </p>
                  </Column>
                </Grid>
              </Column>
              <Column>
                <Grid childWidth="1-1" className="uk-text-center">
                  <Column>
                    <img src="static/emr-3.svg" className="uk-preserve"></img>
                  </Column>
                  <Column>
                    <p>Save money by having lifetime warranty and license </p>
                  </Column>
                </Grid>
              </Column>
            </Grid>
          </Column>
        </Grid>
      </Section>
      <CTA></CTA>
    </>
  );
};

export default ProductContent;
