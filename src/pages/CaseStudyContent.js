import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Section, Grid, Column } from '../components/Grid';
import CTA from '../components/CTA';
import { Helmet } from 'react-helmet';

const CaseStudyContent = () => {
  const { client } = useParams();

  return (
    <>
      <Helmet>
        <title>Case Study - Hospital Challenges and our Solutions</title>
        <meta
          name="description"
          content={
            client === 'ngh'
              ? "Learn how Nazareth General Hospital improved its operations with Comlogik's solutions."
              : "Discover how MMGHHSCP transformed its processes with Comlogik's HIMS™."
          }
        />
        <meta
          name="keywords"
          content="Case Study, Healthcare Solutions, Hospital Information Management"
        />
        <meta name="author" content="Comlogik" />
      </Helmet>
      <Section className="gradient-bg-light">
        <Grid childWidth="1-1" className="uk-flex-center uk-flex-middle">
          <Column>
            <h1 className="uk-text-center">Case Study</h1>
          </Column>
          <Column className="uk-flex uk-flex-middle uk-flex-center">
            <ul className="uk-breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/clients">Clients</Link>
              </li>
              <li>
                <span className="active">
                  {client === 'ngh' ? 'Nazareth General Hospital' : 'MMGHHSCP'}
                </span>
              </li>
            </ul>
          </Column>
        </Grid>
      </Section>
      {client === 'ngh' ? (
        <Section>
          <Grid childWidth="1-1">
            <Column className="uk-margin-medium-top">
              <Grid childWidth="1-1 expand@l">
                <Column width="2-3@l" className="uk-flex uk-flex-column">
                  <h5 className="meta">CLIENT</h5>
                  <h1 className="uk-margin-remove">
                    Nazareth General Hospital
                  </h1>
                  <span className="uk-text-lead uk-margin-top">
                    Nazareth General Hospital increases income with Comlogik’s
                    just-in-time inventory and quality reporting solution
                  </span>
                  <h4 className="uk-margin-large-top">The Challenge</h4>
                  <p className="uk-margin-remove">
                    Due to increasing medicines and supplies cost, managing and
                    securing the hospitals stock and central inventory is a
                    major concern of the hospital. Nazareth General Hospital
                    (NGH) has always relied on people who have been with them
                    through the years and considers almost everybody as
                    trustworthy and can be counted on when integrity is an
                    issue. Though this may be hard to appreciate sometimes, few
                    hospital owners still believes in this perception. Trust
                    will be always a debate but in some cases, but failure in
                    inventory management also falls on the software being used
                    as well. What NGH needed is a system that has a solid
                    security along with the facility to manage and produce an
                    accurate inventory then generate the necessary reports
                    needed by the hospital.
                  </p>
                  <h4 className="uk-margin-large-top">The Solution</h4>
                  <p className="uk-margin-remove">
                    After deliberating and taking time to see all existing
                    providers who can meet the needs and expectations of the
                    hospital, NGH decided to purchase Comlogik’s Healthcare
                    Suite in order to address its unique requirements. The
                    complete HIMS package provided all the necessary modules
                    essential in running their hospital and more. The Inventory
                    Management System afforded everything the department needed
                    with features like Canvas Manager™, Reagents & Supplies
                    Tracker, Multi-warehousing capabilities, Barcode capability,
                    Expiry & Reorder Alerts and a lot more. Also, all
                    transactions are seamlessly integrated and linked in the
                    Comlogik’s Financials™ (Accounting System) in real-time.
                  </p>
                </Column>
                <Column>
                  <div className="uk-card uk-card-default testimonials-bg uk-border-rounded">
                    <div className="uk-card-body uk-flex-column">
                      <div className="uk-text-center">
                        <img src="static/logos/Nazareth-General-Hospital.png"></img>
                      </div>
                      <h5>The Client</h5>
                      <p className="uk-margin-remove">
                        Nazareth General Hospital has been providing quality
                        health care in Dagupan City and the region for more than
                        50 years. Since its inception in 1959 asa two-bedlying
                        in facility along Arellano street, the hospital is now
                        based at Perez boulevard and has dramatically
                        transformed from a facility with just two (2) physicians
                        and three (3) employees to a comprehensive health care
                        leader in the region with over 150 employees and 250
                        physicians.
                      </p>
                      <div className="uk-margin-medium-top">
                        <a className="uk-button uk-button-primary">
                          View website
                        </a>
                      </div>
                    </div>
                  </div>
                </Column>
              </Grid>
            </Column>
            <Column>
              <div className="uk-card uk-card-body uk-card-primary uk-flex-column">
                <h4 style={{ color: 'white' }}>The Result</h4>
                <p className="text-white">
                  Currently, NGH is undergoing a major upgrade in facilities and
                  new buildings are being built to accommodate more patients and
                  house additional services that will be offered soon. This turn
                  of events has been brought about by the success of the
                  hospital in terms of higher patients satisfaction, less
                  waiting time, eliminated errors in billing resulting to
                  increased revenue, and that would be theft are now deterred in
                  committing crimes since everything is now automated.
                </p>
                <div
                  className="uk-position-relative uk-visible-toggle uk-light"
                  tabIndex="-1"
                  data-uk-slider="center: true"
                >
                  <ul
                    className="uk-slider-items uk-flex-middle"
                    data-uk-grid=""
                  >
                    <li className="uk-width-3-4">
                      <div className="uk-panel">
                        <img src="static/nazareth-1.jpg"></img>
                      </div>
                    </li>
                    <li className="uk-width-3-4">
                      <div className="uk-panel">
                        <img src="static/nazareth-2.jpg"></img>
                      </div>
                    </li>
                    <li className="uk-width-3-4">
                      <div className="uk-panel">
                        <img src="static/nazareth-3.jpg"></img>
                      </div>
                    </li>
                    <li className="uk-width-3-4">
                      <div className="uk-panel">
                        <img src="static/nazareth-4.jpg"></img>
                      </div>
                    </li>
                    <li className="uk-width-3-4">
                      <div className="uk-panel">
                        <img src="static/nazareth-5.jpg"></img>
                      </div>
                    </li>
                    <li className="uk-width-3-4">
                      <div className="uk-panel">
                        <img src="static/nazareth-6.jpg"></img>
                      </div>
                    </li>
                    <li className="uk-width-3-4">
                      <div className="uk-panel">
                        <img src="static/nazareth-7.jpg"></img>
                      </div>
                    </li>
                    <li className="uk-width-3-4">
                      <div className="uk-panel">
                        <img src="static/nazareth-8.jpg"></img>
                      </div>
                    </li>
                    <li className="uk-width-3-4">
                      <div className="uk-panel">
                        <img src="static/nazareth-9.jpg"></img>
                      </div>
                    </li>
                    <li className="uk-width-3-4">
                      <div className="uk-panel">
                        <img src="static/nazareth-10.jpg"></img>
                      </div>
                    </li>
                  </ul>
                  <a
                    className="uk-position-center-left uk-position-small uk-hidden-hover"
                    data-uk-slidenav-previous=""
                    data-uk-slider-item="previous"
                  ></a>
                  <a
                    className="uk-position-center-right uk-position-small uk-hidden-hover"
                    data-uk-slidenav-next=""
                    data-uk-slider-item="next"
                  ></a>
                </div>
              </div>
            </Column>
          </Grid>
        </Section>
      ) : null}
      {client === 'mmghhscp' ? (
        <Section>
          <Grid childWidth="1-1">
            <Column className="uk-margin-medium-top">
              <Grid childWidth="1-1 expand@l">
                <Column width="2-3@l" className="uk-flex uk-flex-column">
                  <h5 className="meta">CLIENT</h5>
                  <h1 className="uk-margin-remove">
                    Medical Mission Group Hospital Health Services Cooperative
                    Palawan
                  </h1>
                  <span className="uk-text-lead uk-margin-top">
                    Defying the naysayers against new technology and the little
                    known solutions provider
                  </span>
                  <h4 className="uk-margin-large-top">The Challenge</h4>
                  <p className="uk-margin-remove">
                    When Comlogik came in 2006, MMGHHSCP was a 25 bed capacity
                    who came in existence after the MMG PPC Cooperative
                    Management changed its name from its former name St. Ezekiel
                    Moreno Cooperative Hospital.
                    <br />
                    <br /> Besieged by compounding problems caused by common
                    hospitals complaints like delayed payments due to rejected
                    PhilHealth claims, inaccurate inventories, inefficient
                    hospital processes as well as erroneous financial reports
                    resulting to incorrect data that completely affected
                    decisions of the Board in relation to its direction. The
                    only recourse is to get help from people who are used to
                    this kind of cases and having remarkable experience in
                    overcoming it. Determined to turnaround the situation, Dr.
                    Alvin Timbancaya, MMGHHSCP Hospital Administrator and
                    together with the rest of the management who has committed
                    to transform their small hospital into one of Palawan’s
                    finest healthcare institution in the region is in need of a
                    solutions partner who can assist and train the hospital in
                    achieving their desired outcome.
                  </p>
                  <h4 className="uk-margin-large-top">The Solution</h4>
                  <p className="uk-margin-remove">
                    Embarking on the journey of finding the best product and
                    provider was never that easy, there were issues of security
                    and proven use of the technology as well as concerns in the
                    track record and capabilities of the solutions provider that
                    will be selected. During this time, MMGHHSCP heard of
                    Comlogik’s HIMS™ (Hospital Information & Management System)
                    from one of its partners in Quezon province and on how
                    Comlogik automated the billing and other departments
                    resulting in major improvements in that facility.
                  </p>
                </Column>
                <Column>
                  <div className="uk-card uk-card-default testimonials-bg uk-border-rounded">
                    <div className="uk-card-body uk-flex-column">
                      <div className="uk-text-center">
                        <img src="static/logos/MMG-Palawan.png"></img>
                      </div>
                      <h5>The Client</h5>
                      <p className="uk-margin-remove">
                        Established in 1998, the Medical Mission Group Hospital
                        Health Services Cooperative Palawan or MMGHHSCP is a
                        Level 3 hospital institution located at the corner of
                        Burgos and Mabini Streets in Puerto Princesa City,
                        Palawan. The 150 bed hospital is the largest and most
                        advanced non-government healthcare facility in Region
                        4B. This private medical facility is the most advanced
                        and most equipped to handle different types of medical
                        concerns.
                        <br />
                        <br /> Dr. Alvin P. Timbancaya, one of the people behind
                        its success is the current hospital administrator of the
                        Medical Mission Group Hospital Health Services
                        Cooperative Palawan.
                      </p>
                      <div className="uk-margin-medium-top">
                        <a className="uk-button uk-button-primary">
                          View website
                        </a>
                      </div>
                    </div>
                  </div>
                </Column>
              </Grid>
            </Column>
            <Column>
              <div className="uk-card uk-card-body uk-card-primary uk-flex-column">
                <h4 style={{ color: 'white' }}>The Result</h4>
                <p className="text-white">
                  After two (2) months of stringent implementation, MMGHHSCP
                  rolled out HIMS™ for Go-live. Immediately, the hospital
                  noticed a big difference from the previous process they have
                  been using. Billing patients are now in real time, inventories
                  are correct, Financial reports are almost 99.9% accurate and
                  on time. With the continuous growth and success, the hospital
                  thrived, and in 2014, MMGHHSCP inaugurated the 150 Bed
                  capacity new building complete with modern equipment and
                  facilities. Comlogik continues to support and upgrade HIMS™
                  software to be at par with hospitals in the Metro.
                </p>
              </div>
            </Column>
          </Grid>
        </Section>
      ) : null}
      <CTA />
    </>
  );
};

export default CaseStudyContent;
