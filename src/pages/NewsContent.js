import React from 'react';
import { useParams } from 'react-router-dom';

import { Section, Grid } from '../components/Grid';
import Breadcrumb from '../components/NewsContent/Breadcrumb';
import Content from '../components/NewsContent/Content';

const NewsContent = () => {
  const { keyword } = useParams();

  return (
    <>
      <Breadcrumb />
      <Section>
        <Grid className="uk-grid-medium">
          {keyword === 'covid19' ? (
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
          ) : null}
          {keyword === '1' ? (
            <Content
              date="MARCH 10, 2020"
              title="Cancellation of all PHA Regional Conferences  due to COVID-19"
              image="static/news/news-1.jpg"
              content={`PHA Board headed by Dr. Jaime A. Almora, MD, current president of this prestigious healthcare organization recently announced the cancellation of all regional conferences due to the current pandemic. This is in compliance with the directives of the DOH and no less than President Duterte on Public Health emergency. Advice on the subsequent conferences shall depend on the conditions prevailing then, according to the official statement.

              Likewise, the PHA Board shall also institute measures that will facilitate continuous dialogues on relevant issues with agencies concerned. Needless to say, they will focus on disseminating valuable updates from WHO, DOH and other credible sources thu other means that will not require social contacts. This will be in the form of emails, text messages, ZOOM meetings or other means.
              
              For more information about PHA’s plans and other news, you may contact the PHA Executive Director, Mr. Climaco Caliwara at +639178511500.`}
            />
          ) : null}
          {keyword === '2' ? (
            <Content
              date="APRIL 6, 2020"
              title="Comlogik wins bid for Tarlac Provincial Hospital HIS Project"
              image="static/news/news-2.jpg"
              content={`Comlogik recently won the bid for the installation of HIMS in Tarlac Provincial Hospital. This milestone comes after having implemented the 3 District Hospitals located in Concepcion, Camiling and La Paz in record time. The Provincial Government of Tarlac decided to change their current setup due to a series of issues encountered, its inability to perform other functions, as well as its limitation in after sales support – something that is very critical to a hospital as big as TPH. 

              In searching for new providers that will handle the tremendous task of maintaining and operating a 200 bed capacity hospital, a robust and flexible system that will adapt to evolving needs as well as growing problems in the healthcare industry, they seek out help from the nearby hospitals and asked what software they are using. They found out that 80% of them are utilizing Comlogik HIMS and were very satisfied with its features and the kind of support they are receiving which is exceptional.
              
              Other suppliers bid for the project and submitted their proposal but were not able to match with the value of what Comlogik is offering. With its track record, price, ability to customize features that are unique to the hospital, tailor-fitted implementation, integrate the different district hospitals into one central repository of patient data and outstanding support makes it the unbeatable choice.
              
              Under the leadership of Governor Susan Yap, TPH is expected to forge ahead in providing the best healthcare service that will be a model for other provinces in the country.`}
            />
          ) : null}
          {keyword === '3' ? (
            <Content
              date="MAY 4, 2020"
              title="Comlogik announces the release of AnywhereMed – A simple but powerful Telemedicine App"
              image="static/news/news-3.jpg"
              content={`Comlogik, a healthcare software company building physician-first solutions, announced today the launch of its web app, available for all browsers. In addition to the other recently developed app, Comlogik’s new web app will now let physicians provide remote consultations to their patients via web portal with internet connection. Participating physicians can simply access the link to any browser and connect in real-time for diagnosis and treatment of a variety of medical issues.

              An easy-to-use, telemedicine app designed by physicians, for physicians, Comlogik solution helps healthcare providers raise patient satisfaction and boost practice revenue. Patients get convenient, accessible care for minor injuries, illnesses, or follow-ups from the comfort of their homes. And healthcare providers improve their own experience: by supplementing in-office patient visits with remote video visits using third party video app (Zoom, Meetings, Teams etc.), physicians can reduce no-shows, optimize their appointment calendars, and get reimbursed before or after-hours consults.

              “The release of our web app makes Comlogik’s telemedicine platform even more accessible and intuitive for patients and their healthcare providers,” says Dr. Rommel Z. Dueñas, one of Comlogik’s Software Consultant. “More than ever we rely on our smartphones for everyday tasks—including getting access to healthcare. The power of telemedicine is all about getting high-quality care no matter where you are. We’re harnessing that power by connecting doctors and their patients in a safe, secure way via mobile device and web app.”

              The AnywhereMed telemedicine app features:
              • <strong>Integrated to HIMS</strong> -  The app is built to be an integral part of Comlogik’s HIMS. Physicians can easily access patients records directly from the hospital server.
              • <strong>Virtual treatment</strong> - By using technology proven video conference app,  crystal-clear video and the image upload feature allows physicians to diagnose and treat their patients remotely.
              • <strong>ePrescribe</strong> - Send prescriptions electronically to the patient. Providers can send any needed prescription electronically to patients where they present it in pharmacies or send as attachments for online medicines ordering.
              • <strong>Stay-in-touch</strong> - providers and patients get updates on the status of remote visit requests via text, call or email.
              • <strong>Collect Co-pay and Bill</strong> - providers can charge patients for the visit before or after the service.
              • <strong>Patient Records</strong> - a complete, exportable record of the visit that can be submitted for reimbursement, and easily added to a practice’s EMR.
              
              In order to use the Anywhere Telemedicine app, physicians need to first sign up with Comlogik. For Comlogik’s HIMS users, hospitals can apply and request for discounted price for volume users. Only the patients of participating physicians and hospitals can use the app.
              Comlogik is now offering free, personalized demos to interested providers. Contact our sales representative and get connected today!`}
            />
          ) : null}
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
