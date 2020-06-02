import React, { useState, useEffect } from 'react';
import { parse, format } from 'date-fns';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Section, Grid } from '../components/Grid';
import Breadcrumb from '../components/NewsContent/Breadcrumb';
import Content from '../components/NewsContent/Content';

const NewsContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const link = `http://40.90.179.136:8080/comlogik_api/v1/news/${id}`;
    axios
      .get(link)
      .then((response) => {
        const _data = [];
        response.data.data.news.forEach((news) => {
          _data.push(news);
        });
        const toRender = _data.map((news) => {
          return (
            <Content
              key={news.id}
              date={format(
                parse(news.dateAdded, 'yyyy-MM-dd HH:mm:ss.SSS', new Date()),
                'MMMM dd, yyyy'
              )}
              title={news.title}
              image={news.image}
              content={news.news}
            />
          );
        });
        setIsLoaded(true);
        setData(toRender);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Breadcrumb />
      <Section>
        <Grid className="uk-grid-medium">
          {isLoaded ? data : null}
          {/* {id === 'covid19' ? (
            <Content
              date="MARCH 16, 2020"
              title="Amidst COVID-19 Pandemic, Comlogik Offers Support to Clients and Partners Nationwide"
              image="static/news/covid19.jpg"
              content={`For the past several days, we have witnessed a rapid escalation of developments regarding the
            spread of the Coronavirus Disease (COVID-19). The healthcare industry and service providers
            have been significantly impacted by this pandemic. We have had to cancel our schedules
            including ongoing system implementations with deep sadness and regret due to community
            quarantines, land, sea, and air travel restrictions.

            Officially we have suspended operations yesterday, March 17 and have decided to suspend all
            our Luzon operations from March 18 to April 14, 2020, while the Enhanced Community
            Quarantine measures of the Philippine government are in effect. It is a difficult, but necessary
            decision, as part of our efforts to ensure the safety of our beloved clients and operation teams,
            and to comply with stricter quarantine measures, and air, sea, and land restrictions in the
            Philippines.

            Prior to the Enhanced Community Quarantine (ECQ), we setup a skeletal workforce to reduce
            our operations team to 50% and assigned specific tasks to each member who will be working
            from home. We are working tirelessly to ensure all of you can conveniently access our support
            24/7, communicate with your assigned representative anytime of the day, and our customer
            care who is always available to assist you as if we are onsite. During this period, we will have
            our 30-strong Support Team to be on standby online for any issues you may encounter during
            the period of the quarantine and will be ready to provide solutions as needed. For your
            guidance and information, these are the contact numbers and ways you can communicate with
            us for any issues or concern you may have: Landline: +63289329421 / +63289522589 loc. 106
            (9am - 4pm) Mobile: 09177629681 / 09567312260 / 09158525436.

            Comlogik continues to monitor the situation and will provide updates as soon as possible. We
            are assured that this situation, although difficult and unprecedented, will pass. Our team is
            looking forward to continuing where we left off with providing you with our best service, but
            everyone’s safety is the priority at this time. Stay safe and healthy! May God protect us all.`}
            />
          ) : null} */}
          {/* <Column className="uk-width-1-1 uk-width-1-3@m">
            <div className="gray-bg uk-padding-small">
              <h4 className="uk-margin-small-top uk-margin-bottom">
                Other news
              </h4>
              <Column className="uk-margin-bottom">
                <div data-uk-grid="">
                  <div className="uk-width-auto uk-margin-remove">
                    <div>
                      <img src="https://picsum.photos/100"></img>
                    </div>
                  </div>
                  <div className="uk-width-expand test1 uk-padding-small">
                    <div className="test2">
                      <p className="uk-text-bold uk-margin-remove">
                        Lorem ipsum dolor sit amet
                      </p>
                      <p className="uk-margin-remove">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt. amet amet amet
                      </p>
                    </div>
                  </div>
                </div>
              </Column>
              <Column className="uk-margin-bottom">
                <div data-uk-grid="">
                  <div className="uk-width-auto uk-margin-remove">
                    <div>
                      <img src="https://picsum.photos/100"></img>
                    </div>
                  </div>
                  <div className="uk-width-expand test1 uk-padding-small">
                    <div className="test2">
                      <p className="uk-text-bold uk-margin-remove">
                        Lorem ipsum dolor sit amet
                      </p>
                      <p className="uk-margin-remove">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt. amet amet amet
                      </p>
                    </div>
                  </div>
                </div>
              </Column>
              <Column className="uk-margin-bottom">
                <div data-uk-grid="">
                  <div className="uk-width-auto uk-margin-remove">
                    <div>
                      <img src="https://picsum.photos/100"></img>
                    </div>
                  </div>
                  <div className="uk-width-expand test1 uk-padding-small">
                    <div className="test2">
                      <p className="uk-text-bold uk-margin-remove">
                        Lorem ipsum dolor sit amet
                      </p>
                      <p className="uk-margin-remove">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt. amet amet amet
                      </p>
                    </div>
                  </div>
                </div>
              </Column>
              <a className="uk-button uk-button-primary">See All News</a>
            </div>
          </Column> */}
        </Grid>
      </Section>
    </>
  );
};

export default NewsContent;
