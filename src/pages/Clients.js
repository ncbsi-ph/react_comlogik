import React from 'react';
import CommonHeader from '../components/CommonHeader';
import { default as ClientsComponent } from '../components/Index/Clients';
import CaseStudies from '../components/Clients/CaseStudies';
import CTA from '../components/CTA';

const Clients = () => {
  const logos_1 = [
    'apalit-doctors-hospital.jfif',
    'Angeles-Medical-Center.jpg',
    'blessed-family-doctors-hospital.jpg',
    'Dagupan-Doctors-Villaflor-Memorial-Medical-Center.png',
    // 'Divine-Word-Hospital.jpg',
    'Jecsons-Medical-Center.jpg',
    'medical-center-of-taguig.png',
    'Medicus-Medical-Center.png',
    'Mercy-Community-Hospital.jpg',
    // 'Metro-Antipolo-Hospital-Medical-Center.png',
    'MMG-Palawan.png',
    'Nueva-Ecija-Doctors-Hospital.png',
    'Pines-City-Doctors-Hospital.jpg',
    'SOCSARGEN County Hospital.jpg',
    // 'Southeast-Asian-Medical--Center.jpg',
    'St-Clares-Medical-Center.png',
    //'Sto. Niño Medical Center',
    'UERM-Medical-Center.png',
    'UST-Hospital-of-Legazpi.png',
    'Virgen-Milagrosa-Medical-Center.png',
    'Visayas-Community-Medical-Center.png',
  ];
  const logos_2 = [
    'Adventist-Medical-Center-Iligan.png',
    'ASCCOM-Medical-Center.png',
    // 'Baguio-Medical-Center.jpg',
    'Bataan-Doctors-General-Hospital.jpg',
    'Bicol-Access-Health-Centrum.jpg',
    'Binakayan-Doctors-Hospital.jpg',
    'Daet-Doctors-Hospital.png',
    'Dr-Amando-Garcia-Medical-Center.jpg',
    'Floridablanca-Doctors-Hospital.jpg',
    'Heramil-General-Hospital.jpg',
    'Iligan-Medical-Center.jpg',
    'Infant-Jesus-Medical-Center.png',
    'La-Union-Medical-Diagnostic-Hospital.png',
    'Lopez-St-Jude-Hospital.png',
    'Metro-Lemery-Medical-Center.png',
    'Meycauayan-Doctors-Hospital.png',
    'Premiere-General-Hospital-of-NE.png',
    'Santiago-City-Hospital.png',
    'St. James Medical Center.png',
    'St-Joseph-Hospital.jpg',
  ];
  const logos_3 = [
    'Alabang-Medical-Center.jpg',
    'Alaminos-Doctors-Hospital.png',
    'Borja Medical Center.png',
    //'Cabiao General Hospital',
    //'Corpuz Medical Center',
    'Dr-Yangas-Hospital.png',
    //'Gabriela Silang Medical Center',
    // 'MMG-Tagum.png',
    'Mt-Carmel-Diocesan-General-Hospital.jpg',
    'Nazareth-General-Hospital.png',
    'Pamana-Medical-Center.jpg',
    'Queen-Mary-Help-of-Christian-Hospital.jpg',
    'Ramos-General-Hospital.png',
    'Rayos-Valentin-Hospital.png',
    'St-Gabriel-Medical-Center.jpg',
    'Tarlac-Provincial-Hospital.png',
    'Tayug-Family-Hospital.jpg',
    //'Trinity Women’s &amp; Child Hospital',
    'Urdaneta-Sacred-Heart-Hospital.jpg',
  ];

  return (
    <>
      <Helmet>
        <title>
          Our Clients - Learn from the Best | Comlogik Business Systems
        </title>
        <meta
          name="description"
          content="Discover our esteemed clients and their success stories. Learn how they partnered with us to achieve growth and excellence."
        />
        <meta
          name="keywords"
          content="clients, success stories, partnerships, growth"
        />
      </Helmet>
      <CommonHeader
        svg={true}
        image="static/clients.svg"
        label="CLIENTS"
        heading="Learn from the best – Our customers"
        sentence="We wish we have the space to list all our satisfied and delighted customers here. We have some who have
        been with us from the beginning and some who has truly embraced the company’s core values and considered
        us their partners in growth and success."
      />
      <ClientsComponent />
      {/* <Section removePadding="horizontal" container={false}>
        <LogoCarousel
          logos={logos_1.map((logo) => `static/logos/${logo}`)}
        ></LogoCarousel>
        <LogoCarousel
          logos={logos_2.map((logo) => `static/logos/${logo}`)}
        ></LogoCarousel>
        <LogoCarousel
          logos={logos_3.map((logo) => `static/logos/${logo}`)}
        ></LogoCarousel>
        <div className="uk-padding uk-padding-remove-bottom">
          <small className="uk-text-muted">
            *All product names, logos, brands, trademarks and registered
            trademarks are property of their respective owners. All company,
            product and service names used in this website are for
            identification purposes only.
          </small>
        </div>
      </Section> */}
      <CaseStudies />
      {/* <Partners></Partners> */}
      <CTA />
    </>
  );
};

export default Clients;
