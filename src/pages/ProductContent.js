import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Section } from '../components/Grid';
import ProductHeader from '../components/ProductContent/ProductHeader';
import HIMSStats from '../components/ProductContent/HIMSStats';
import MiscHeader from '../components/ProductContent/MiscHeader';
import Feature from '../components/ProductContent/Feature';
import CAFeature from '../components/ProductContent/CAFeature';
import CTA from '../components/CTA';
import ECharting from '../pages/ECharting';
const ProductContent = () => {
  const { product } = useParams();

  const getHelmetForProduct = (title, description, imageUrl) => (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={window.location.href} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
    </Helmet>
  );

  return (
    <>
      {product === 'hims' ? (
        <>
          {getHelmetForProduct(
            'HIMS - Hospital Information & Management System',
            'HIMS™ is a comprehensive, fully integrated, yet easy-to-use Hospital Information System for all hospital levels.',
            'static/products/hims/hims-header.png'
          )}
          <ProductHeader
            image="static/products/hims/hims-header.png"
            name="Hospital Information & Management System"
            description="HIMS™ is a comprehensive, fully integrated, yet easy to use Hospital Information System for all hospital levels. HIMS™ is a PhilHealth Certified and DOH Certified Software that can be customized and adapted to various hospital setup. Using HIMS™ provides your team the right information at the right time, which will result in the right decisions."
          />
          <HIMSStats />
          <MiscHeader
            image="static/product-1.png"
            title="HOSPITAL INFORMATION & MANAGEMENT SYSTEM"
            description="We understand the challenges you face today. We believe that staying the same is not a destiny but a choice. Here at Comlogik, we will help you deal with this unique and complex situation and be more profitable at the same time."
          />
          <MiscHeader
            image="static/products/hims/misc.jpg"
            description="Get automated in 60 days and make use of the best practices successful hospitals are taking advantage without the cost and worries involved in implementing a new system."
          />
          <Section>
            <Section removePadding="vertical">
              <h3 className="uk-text-primary uk-text-center uk-text-left@s">
                FEATURES
              </h3>
            </Section>
            <Feature
              image="static/products/hims/feature-1.jpg"
              feature="DOH Certified Provider"
              description="Comlogik is the 1st Independent Software Provider to be Certified and Validated by DOH. This feat clearly shows how Comlogik treat requirements mandated by the Government and how efficient are our team in developing and complying with complex specifications. Aside from the standard features, Comlogik EMR includes healthcare analytics complete with dashboards for a more advance and creative visuals."
            />
            <Feature
              image="static/products/hims/feature-2.png"
              feature="PhilHealth Certified Provider"
              description="Comlogik is a PhilHealth Certified eClaims Provider. This feature includes the ‘Eligibility Web Service’ to access patients contributions, Claims Verification and CF4 module. The PhilHealth eClaims is fully integrated to HIMS™ thus, eliminating redundant entries, minimizing the encoding works and efficiently provides all needed backend reports in a breeze."
            />
            <Feature
              image="static/products/hims/feature-3.jpg"
              feature="Online PF Entry and Monitoring"
              description="No need for the doctors to call or go to the billing department to key in their Professional Fees. PF Entry allows the doctors with a secure login credential to access this module and type in their PF anywhere in the hospital. Likewise, doctors are notified of patients’ PF payment thru SMS and can be monitored if pf’s are available for collection."
            />
            <Feature
              image="static/products/hims/feature-4.jpg"
              feature="Multi-Warehouse Inventory Management"
              description="Aside from accurately tracking the constant movement of inventory between departments, it eliminates manual data entry, paper files, and forms by automating records and other documents that determine how and where medical inventory is received, stored, and used. This creates better control of medical inventory and the policies and procedures that are related to managing your inventory levels. (include image of barcode and RFID)"
            />
            <Feature
              image="static/products/hims/feature-5.jpg"
              feature="Expiry & Reorder Alerts"
              description="Never experience a medicine or supplies getting expired or unaware that a certain item are low in stock. The Expiry & Reorder Alerts notifies the users by setting the item its expiration date and reorder point. Once it reaches its expiration date and reorder point, the user can request for the item concern directly from the module."
            />
            <Feature
              image="static/products/hims/feature-6.jpg"
              feature="Patient Satisfaction Survey System"
              description="The InsTap Patient Satisfaction Survey System gather information from patients about experiences with the hospital and with the survey results helps the hospital lead to better performance of a practice with increased quality of care delivered, increased patient fulfillment, and ultimately – more patient referrals. Ensuring that your patients are satisfied is the keystone to successfully operating and growing your practice."
            />
            <Feature
              image="static/products/hims/feature-7.jpg"
              feature="Reagents and Supplies Tracker"
              description="Reagents and Supplies Tracker is used to monitor the movement and consumption of reagents, disposables, analytical instruments, computer hardware, and general laboratory equipment. Here, you can easily upload your existing Excel-based inventory and get started in minutes, manage lab inventory, place orders and track all of them in one place."
            />
            <Feature
              image="static/products/hims/feature-8.jpg"
              feature="Delta Check"
              description="Through the Delta Check Module, laboratories can now detect discrepancies in patient test results prior to reporting by comparing current patient values to previous ones. Delta checks limits define the allowable difference between consecutive results for a specific analyte on the same patient within a certain time interval."
            />
            <Feature
              image="static/products/hims/feature-9.jpg"
              feature="Arrears Notification & Alert"
              description="Once patient returns in hospital and registers either as an OPD or IPD Patient, HIMS™ notifies the end-user by alerting them if the patient that is about to check-in has outstanding bill or been issued a PN or promissory note. Hospitals may allow the patient to be admitted and settle the previous bill to the new account or not."
            />
            <Feature
              image="static/products/hims/feature-10.png"
              feature="Nurse Kardex"
              description="The Nurse Kardex is a part of HIMS™ meaningful features, here, the patients’ medical information are entered by the nursing staff are stored and shared. It includes diagnoses, commitment information, information about the gatekeeper and legal guardian, diet information, and other information that can be used by the Doctors as an easy reference rather than looking in the chart."
            />
          </Section>
        </>
      ) : null}
      {product === 'emr' ? (
        <>
          {getHelmetForProduct(
            'EMR - Electronic Medical Record',
            'Avail the First Government Validated & Certified EMR System in the Philippines.',
            'static/products/emr/other-logo.png'
          )}
          <MiscHeader
            image="static/products/emr/other-logo.png"
            description="Capture every medical information you need, send it electronically to DOH’s 
            Framework anytime and be able to produce the reports you need in a breeze."
          />
          <MiscHeader
            image="static/products/emr/misc.jpg"
            description="Avail the First Government Validated & Certified EMR System in the Philippines and experience the convenience of harnessing all patients information using the most user-friendly application developed and designed in compliance with requirements of the healthcare sector."
          />
          <Section>
            <Section removePadding="vertical">
              <h3 className="uk-text-primary uk-text-center uk-text-left@s">
                FEATURES
              </h3>
            </Section>
            <Feature
              image="static/products/emr/feature-1.png"
              feature="Government Certified System"
              description="Comlogik is the First Independent Software Provider to be Certified and Validated by DOH. This certification is issued in relation to the  Implementation of the National eHealth Electronic Medical Record System Validation that will help the national government analyze health service data coming from various systems at the health facilities."
            />
            <Feature
              image="static/products/emr/feature-2.jpg"
              feature="EMR Dashboard"
              description="The  EMR Dashboard quickly pulls together the specific data the hospital management wants to see relating to a specific health case at any given period of time. Based on preference, the EMR dashboard also create visuals that help the management better understand the prevalent health case affecting the area."
            />
            <Feature
              image="static/products/emr/feature-3.png"
              feature="Integrated with HIMS"
              description="Since Comlogik EMR System is seamlessly integrated with HIMS, you are assured of compatibility and real time data. By using one system, the data will not have to be exported, imported or replicated, there is less chance for human error. This will provide you with more accurate and trustworthy data while reducing costs and time spent on upkeep and troubleshooting."
            />
            <Feature
              image="static/products/emr/feature-4.jpg"
              feature="Disease Surveillance & Control"
              description="Keeping informed and being ahead of any outbreak before it spreads is the most life preserving measure anyone would want. With the native Health Analytics, monitoring deadly and dangerous diseases as it arises and develops into a pandemic situation can be closely watch and control by highlighting the area where the most cases have occurred or started."
            />
            <Feature
              image="static/products/emr/feature-5.png"
              feature="ICD 10 & 11 Code Compliant"
              description="Comlogik EMR software is an ICD 10 & 11 compliant that offers an intuitive, easily navigable interface and makes it possible for healthcare professionals and end-users to input a word, term, or phrase and receive a list of matching ICD-10 and 11 codes. The advance interface makes it easy to find the correct code hassle free."
            />
            <Feature
              image="static/products/emr/feature-6.jpg"
              feature="Simple, Intuitive User Interface"
              description="It's so easy to learn and use Comlogik EMR. With the hospital staff spending one-third of their time using the system, we designed it to be natural and easy on the eyes. Drag-and-drop capabilities and minimal screen openings will allow you to move through the system with a minimal number of mouse clicks."
            />
          </Section>
        </>
      ) : null}
      {product === 'e-charting' ? (
        <>
          {' '}
          {getHelmetForProduct(
            'Electronic Charting - Streamlined Digital Healthcare Records',
            'Electronic Charting is an advanced healthcare solution that connects patients, doctors, and hospitals for seamless and secure medical record management.',
            'static/products/connect/other-logo.png'
          )}
          <ECharting />
        </>
      ) : null}
      {product === 'connect' ? (
        <>
          {getHelmetForProduct(
            'Comlogik Connect - Access Your Hospital Anytime',
            'Comlogik Connect™ is a healthcare mobile app that connects users, doctors, and the hospital.',
            'static/products/connect/other-logo.png'
          )}
          <MiscHeader
            image="static/products/connect/other-logo.png"
            description="Access Your Hospital Anytime, Anywhere"
          />
          <MiscHeader
            image="static/products/connect/misc.jpg"
            description="Comlogik Connect™ is the latest innovation from Comlogik, it is a healthcare mobile application that works as touchpoint between users, doctors and the hospital. The app is designed to eliminate time consuming task associated with finding the appropriate doctor for your ailment and availing hospital services online like booking clinic appointments, queuing for lab examinations or inquiring and knowing your hospital bill during confinement without leaving your room and more."
          />
          <Section>
            <Section removePadding="vertical">
              <h3 className="uk-text-primary uk-text-center uk-text-left@s">
                FEATURES
              </h3>
            </Section>
            <Feature
              image="static/products/connect/feature-1.jpg"
              feature="Find a Hospital Near You"
              description="Locate the nearest hospital to you and find a specialist for your particular need. With the Hospital Finder you can likewise determine the distance from your location and find all available specialist that you need in one touch."
            />
            <Feature
              image="static/products/connect/feature-2.jpg"
              feature="Call an Ambulance"
              description="With the Ambulance Notification Feature, the app lets you call, send sms messages and book a hospital ambulance for emergency cases. The ambulance is equipped with gps locator to find the patients easily and bring them to the hospital quickly."
            />
            <Feature
              image="static/products/connect/feature-3.jpg"
              feature="Book a Doctor’s Appointment"
              description="Comlogik Connect™ is the ultimate solution in booking a doctor appointments. Apart from easily finding the doctor you need in the app, you can choose your own timings and change it as well as be notified via sms if there will be changes in doctors schedule or cancellation."
            />
            <Feature
              image="static/products/connect/feature-4.jpg"
              feature="Queue to any Hospital Services"
              description="Make full use of your time. Get a queue ticket anywhere and allow yourself more time to do something else while waiting for your turn. You can also monitor the status of your ticket because the app displays a real time status of patients being serve."
            />
            <Feature
              image="static/products/connect/feature-5.jpg"
              feature="Get your Results Anywhere"
              description="With Comlogik Connect™, monitoring and downloading your online results is as easy as ABC. Access your Cumulative Results Online and download it in PDF Format. Your doctor are likewise given access for quick interpretation especially in urgent cases."
            />
            <Feature
              image="static/products/connect/feature-6.jpg"
              feature="Access your Hospital Bill"
              description="Being informed and updated in the hospital bill gives the patients the ease to pay it in the way that is convenient for them. Patients can pay their bill at their own phase and be notified if final bill is ready for payment via sms eliminating the time of heading back and forth the Billing Department and asking if the bill is ready for settlement."
            />
          </Section>
        </>
      ) : null}
      {product === 'claims-assure' ? (
        <>
          {getHelmetForProduct(
            'Claims Assure - PhilHealth eClaims Transmittal System',
            'Claims Assure™ is the most sought-after PhilHealth eClaims Transmittal System in the country.',
            'static/products/claims-assure/other-logo.png'
          )}
          <MiscHeader
            image="static/products/claims-assure/other-logo.png"
            title="PhilHealth eClaims Transmittal System"
            description="Nothing is created the same."
          />
          <MiscHeader
            image="static/products/claims-assure/misc.jpg"
            description="If you have experienced downtime, PhilHealth delayed payments, RTH (return-to-hospital) claims and unhappy with the way your support is handled by your provider, we’re here to turn your situation around. Discover why Claims Assure™ is the most sought after PhilHealth eClaims Transmittal System in the country."
          />
          <Section>
            <Section removePadding="vertical">
              <h3 className="uk-text-primary uk-text-center uk-text-left@s">
                FEATURES
              </h3>
            </Section>
            <CAFeature
              number="1"
              feature="Claims Eligibility Web Service"
              description="Check your patients PhilHealth eligibility prior to claims submission. By using this module, you can also verify if patients are eligible to file PhilHealth Claims prior to their admission."
            />
            <CAFeature
              number="2"
              feature="No Downtime"
              description="Uninterrupted Sending of PhilHealth Claims because your data are managed in Microsoft© Azure®, the largest and most secured cloud computing service provider so you are assured of continued service even when others are not."
            />
            <CAFeature
              number="3"
              feature="No Batch Filing"
              description="Send Claims At Your Own Phase as soon as you are done with a patient PhilHealth forms, you can immediately send it to PhilHealth for claims without the need to collect and send it in one batch making it more cost effective by eliminating time and resources spent in waiting."
            />
            <CAFeature
              number="4"
              feature="CF4 with Drug Code Setup Tool"
              description="Claims Assure CF4 Module contains the summary of pertinent clinical information of a patient/member during their hospitalization/episode of care and includes the Drug Code Setup Tool to help you in managing the drugs included in your claims."
            />
            <CAFeature
              number="5"
              feature="Course in the Ward Image Attachment Tool (Integrated with HIMS)"
              description="Easily integrate your images from X-ray and Lab results. Images are automatically compressed so it would not occupy large amount of space in your storage."
            />
            <CAFeature
              number="6"
              feature="eCCSA Integration"
              description="All attachments are easily uploaded with eCSSA or eclaims Cloud Storage API, a PhilHealth developed application program integrated with Comlogik’s healthcare solutions which will help in easily uploading  all documentary attachments required to process the patients claims."
            />
          </Section>
        </>
      ) : null}
      {product === 'anywheremed-telemedicine' ? (
        <>
          {getHelmetForProduct(
            'AnywhereMed Telemedicine - Comlogik Business Systems',
            'Discover AnywhereMed Telemedicine by Comlogik, a cutting-edge telemedicine app designed to enhance healthcare delivery through virtual consultations, ePrescriptions, and integrated HIMS features.',
            'static/product-9.jpg'
          )}

          <MiscHeader
            image="static/product-9.jpg"
            title="AnywhereMed Telemedicine"
            description={`Comlogik, a healthcare software company building physician-first solutions, announced today the launch of its web app, available for all browsers. In addition to the other recently developed app, Comlogik’s new web app will now let physicians provide remote consultations to their patients anytime, anywhere. Participating physicians can simply access the link to any browser and connect in real-time for diagnosis and treatment of a variety of medical issues. An easy-to-use, telemedicine app designed by physicians, for physicians, Comlogik solution helps healthcare providers raise patient satisfaction and boost practice revenue. Patients get convenient, accessible care for minor injuries, illnesses, or follow-ups from the comfort of their homes. And healthcare providers improve their own experience: by supplementing in-office patient visits with remote video visits using third party video app (Zoom, Meetings, Teams etc.), physicians can reduce no-shows, optimize their appointment calendars, and get reimbursed before or after-hours consults."The release of our web app makes Comlogik’s telemedicine platform even more accessible and intuitive for patients and their healthcare providers," says Dr. Rommel Z. Dueñas, one of Comlogik’s Software Consultant. "More than ever we rely on our smartphones for everyday tasks—including getting access to healthcare. The power of telemedicine is all about getting high-quality care no matter where you are. We’re harnessing that power by connecting doctors and their patients in a safe, secure way via mobile device and web app."`}
          />
          <Section>
            <Section removePadding="vertical">
              <h3 className="uk-text-primary uk-text-center uk-text-left@s">
                FEATURES
              </h3>
            </Section>
            <CAFeature
              number="1"
              feature="Integrated to HIMS"
              description="The app is built to be an integral part of Comlogik’s HIMS. Physicians can easily access patients records directly from the hospital server."
            />
            <CAFeature
              number="2"
              feature="Virtual treatment"
              description="By using technology proven video conference app, crystal-clear video and the image upload feature allows physicians to diagnose and treat their patients remotely."
            />
            <CAFeature
              number="3"
              feature="ePrescribe"
              description="Send prescriptions electronically to the patient. Providers can send any needed prescription electronically to patients where they present it in pharmacies or send as attachments for online medicines ordering."
            />
            <CAFeature
              number="4"
              feature="Stay-in-touch"
              description="providers and patients get updates on the status of remote visit requests via text, call or email."
            />
            <CAFeature
              number="5"
              feature="Collect Co-pay and Bill"
              description="providers can charge patients for the visit before or after the service."
            />
            <CAFeature
              number="6"
              feature="Patient Records"
              description="a complete, exportable record of the visit that can be submitted for reimbursement, and easily added to a practice’s EMR."
            />
          </Section>
          <Section removePadding="top">
            <div className="uk-flex uk-flex-column">
              <p>
                In order to use the Anywhere Telemedicine app, private
                physicians need to register with Comlogik to subscribe. For
                Comlogik’s HIMS users, hospitals can apply and request for
                volume licensing so their affiliated medical practitioners can
                simply sign up and register to use the system. Only the patients
                of participating physicians and hospitals can use the app.
                Comlogik is now offering free, virtual demos to interested
                providers. Contact our sales representative and get connected
                today!
              </p>
              <div>
                <Link to="/contact-us" className="uk-button uk-button-primary">
                  Try AnywhereMed
                </Link>
              </div>
            </div>
          </Section>
        </>
      ) : null}
      <CTA />
    </>
  );
};

export default ProductContent;
