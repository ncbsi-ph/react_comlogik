import React from 'react';

import CommonHeader from '../components/CommonHeader';
import { Section } from '../components/Grid';

const CovidSystems = () => {
  return (
    <>
      <CommonHeader
        image="static/covid_hero.png"
        label="SHOWCASE"
        heading="Operating Your Business"
        sentence="Comlogik recognizes the difficulties the spread of COVID-19 is placing the healthcare institutes like yours. While varied news and evolving protocols roll out from health agencies and governments around the country, we remain your reliable partner to help you navigate these new challenges and keep your patients as well as your workers healthy and safe."
      />
      <Section>
        <p>
          As your reliable health IT partner, we established processes that will
          ensure support and services teams remain fully staffed to help address
          all of our clients’ needs during this time. Equipped to be onsite or
          work remotely, with the full capabilities available in all our
          facilities, these teams have great staff flexibility around the
          country. This enables us to pivot our resources as needed to adapt to
          the evolving crisis. As always, you can rely on us for help. You will
          continue to receive 24/7 support via our Support Portal and our
          Hotline contact numbers.
        </p>
        <p>
          Furthermore, we have created solutions to add a layer of protection to
          your frontliners by making them work without or limited physical
          contact with patients in your healthcare facility.
        </p>
        <div className="grid grid-cols-1 gap-5 pt-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            className="flex items-center justify-center h-40 bg-cover"
            style={{
              backgroundImage: 'url("static/covidsystems/anywheremed.jpg")',
            }}
          >
            <img src="static/product-9.png" className="w-4/5" />
          </div>
          <div
            className="flex items-center justify-center h-40 bg-cover"
            style={{
              backgroundImage: 'url("static/covidsystems/connect.jpg")',
            }}
          >
            <img src="static/covidsystems/connect_logo.png" className="w-4/5" />
          </div>
          <div
            className="flex items-center justify-center h-40 bg-cover"
            style={{
              backgroundImage: 'url("static/covidsystems/qlogik.jpg")',
            }}
          >
            <img src="static/covidsystems/qlogik_logo.png" className="w-4/5" />
          </div>
          <div
            className="flex items-center justify-center h-40 bg-cover"
            style={{
              backgroundImage: 'url("static/covidsystems/laboratory.jpg")',
            }}
          >
            <img src="static/covidsystems/molis.png" className="w-3/5" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default CovidSystems;
