import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Recaptcha from 'react-recaptcha';

import { Section, Grid, Column } from '../Grid';

const ContactForm = () => {
  const env = process.env.NODE_ENV;
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    triggerValidation,
  } = useForm();

  const onSubmit = (data, e) => {
    setIsSending(true);
    const _data = {
      environment: env,
      fullName: data.fullName,
      emailAddress: data.email,
      contactNumber: data.contactNumber,
      company: data.company,
      message: data.message,
      captcha: data.captcha,
    };
    axios
      .post(
        'https://cors-anywhere.herokuapp.com/https://new.casaalmarenzo.com/comlogik_api/v1/mail.php',
        JSON.stringify(_data),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        const success = response.data.success;
        if (success) {
          e.target.reset();
          setIsSending(false);
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
        }
      })
      .catch((error) => {
        setIsSending(false);
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 3000);
      });
  };

  const handleVerify = (response) => {
    setValue('captcha', response);
    triggerValidation('captcha');
  };

  const handleExpiry = () => {
    setValue('captcha', null);
    triggerValidation('captcha');
  };

  return (
    <Section>
      <img className="logo-bg" src="static/logo-bg.svg" />
      <Grid childWidth="1-1 1-2@m">
        <Column>
          <img src="static/contact-hero.gif" />
        </Column>
        <Column>
          <Grid childWidth="1-1">
            <Column className="uk-flex uk-flex-column">
              <h5 className="meta uk-margin-remove-bottom">CONTACT US</h5>
              <h2 className="margin-top-30">
                For more questions about our products and pricing, send us a
                message
              </h2>
            </Column>
            <Column>
              <Grid childWidth="1-1">
                <Column>
                  <Column
                    className="uk-padding"
                    style={{ backgroundColor: '#F1F5F9' }}
                  >
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Grid childWidth="1-1">
                        <Column>
                          <Grid childWidth="expand" className="uk-flex-middle">
                            <Column width="1-4">
                              <label
                                className="uk-form-label"
                                htmlFor="fullName"
                              >
                                Full name
                              </label>
                            </Column>
                            <Column>
                              <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="uk-input"
                                autoComplete="off"
                                ref={register({ required: true })}
                              ></input>
                              {errors.fullName && (
                                <span className="uk-display-block uk-text-danger uk-margin-small-top">
                                  Full name is required
                                </span>
                              )}
                            </Column>
                          </Grid>
                        </Column>
                        <Column>
                          <Grid childWidth="expand" className="uk-flex-middle">
                            <Column width="1-4">
                              <label className="uk-form-label" htmlFor="email">
                                Email address
                              </label>
                            </Column>
                            <Column>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                className="uk-input"
                                autoComplete="off"
                                ref={register({ required: true })}
                              ></input>
                              {errors.email && (
                                <span className="uk-display-block uk-text-danger uk-margin-small-top">
                                  Email address is required
                                </span>
                              )}
                            </Column>
                          </Grid>
                        </Column>
                        <Column>
                          <Grid childWidth="expand" className="uk-flex-middle">
                            <Column width="1-4">
                              <label
                                className="uk-form-label"
                                htmlFor="contactNumber"
                              >
                                Contact number
                              </label>
                            </Column>
                            <Column>
                              <input
                                className="uk-input"
                                type="text"
                                id="contactNumber"
                                name="contactNumber"
                                autoComplete="off"
                                ref={register({ required: true })}
                              ></input>
                              {errors.contactNumber && (
                                <span className="uk-display-block uk-text-danger uk-margin-small-top">
                                  Contact number is required
                                </span>
                              )}
                            </Column>
                          </Grid>
                        </Column>
                        <Column>
                          <Grid childWidth="expand" className="uk-flex-middle">
                            <Column width="1-4">
                              <label
                                className="uk-form-label"
                                htmlFor="company"
                              >
                                Company
                              </label>
                            </Column>
                            <Column>
                              <input
                                className="uk-input"
                                type="text"
                                id="company"
                                name="company"
                                autoComplete="off"
                                ref={register({ required: true })}
                              ></input>
                              {errors.company && (
                                <span className="uk-display-block uk-text-danger uk-margin-small-top">
                                  Company is required
                                </span>
                              )}
                            </Column>
                          </Grid>
                        </Column>
                        <Column>
                          <Grid childWidth="expand" className="uk-flex-middle">
                            <Column width="1-4">
                              <label
                                className="uk-form-label"
                                htmlFor="message"
                              >
                                Message
                              </label>
                            </Column>
                            <Column>
                              <textarea
                                className="uk-textarea"
                                id="message"
                                name="message"
                                rows="4"
                                ref={register({ required: true })}
                              ></textarea>
                              {errors.message && (
                                <span className="uk-display-block uk-text-danger uk-margin-small-top">
                                  Message is required
                                </span>
                              )}
                            </Column>
                          </Grid>
                        </Column>
                        <Column>
                          <Grid childWidth="expand" className="uk-flex-middle">
                            {/* <Column width="1-4"></Column> */}
                            <Column className="uk-flex uk-flex-right">
                              <Recaptcha
                                sitekey="6LdHNMMUAAAAAD6VogsJyHQ8tFPpDb1egudacj7_"
                                size="normal"
                                verifyCallback={handleVerify}
                                expiredCallback={handleExpiry}
                              />
                              <input
                                type="hidden"
                                name="captcha"
                                ref={register({ required: true })}
                              />
                              {errors.captcha && (
                                <span className="uk-display-block uk-text-danger uk-margin-small-top">
                                  Captcha is required
                                </span>
                              )}
                            </Column>
                          </Grid>
                        </Column>
                        {isSuccess ? (
                          <Column>
                            <div className="uk-alert-success" data-uk-alert="">
                              <a
                                className="uk-alert-close"
                                data-uk-close=""
                              ></a>
                              <p>Your inquiry has been sent!</p>
                            </div>
                          </Column>
                        ) : null}
                        {isError ? (
                          <Column>
                            <div className="uk-alert-danger" data-uk-alert="">
                              <a
                                className="uk-alert-close"
                                data-uk-close=""
                              ></a>
                              <p>
                                Sending of inquiry failed. Please try again
                                later.
                              </p>
                            </div>
                          </Column>
                        ) : null}
                        <Column className="uk-text-right">
                          <button
                            disabled={isSending ? true : false}
                            type="submit"
                            className="uk-button uk-button-primary"
                          >
                            {isSending ? (
                              <div
                                className="uk-margin-small-right"
                                data-uk-spinner=""
                              ></div>
                            ) : null}
                            Send message
                          </button>
                        </Column>
                      </Grid>
                    </form>
                  </Column>
                </Column>
              </Grid>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default ContactForm;
