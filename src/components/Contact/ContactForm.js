import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Recaptcha from 'react-recaptcha';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { citiesMunicipalities } from 'ph-locations';
import { filter } from 'lodash';
import Select from 'react-select';

import { Section, Grid, Column } from '../Grid';
import { postApiUrl } from '../../helpers/helpers';

let recaptchaInstance;

const products = [
  { label: 'HIMS', value: 'HIMS' },
  { label: 'CIMS', value: 'CIMS' },
  { label: 'Claims Assure', value: 'Claims Assure' },
  { label: 'Comlogik EMR', value: 'Comlogik EMR' },
  { label: 'WorkBenchMD', value: 'WorkBenchMD' },
  { label: 'Comlogik Connect', value: 'Comlogik Connect' },
  { label: 'Paymanager', value: 'Paymanager' },
  { label: 'HRIS WorkForce', value: 'HRIS WorkForce' },
  { label: 'eHealth Tracker', value: 'eHealth Tracker' },
  { label: 'Mollis', value: 'Mollis' },
  { label: 'QueueLogic', value: 'QueueLogic' },
  { label: 'Vaxims', value: 'Vaxims' },
  { label: 'InstaP Survey System', value: 'InstaP Survey System' },
];

const ContactForm = () => {
  const { register, handleSubmit, errors, setValue, control } = useForm({
    defaultValues: {
      country: 'Philippines',
      province: 'Metro Manila',
    },
  });
  const [purpose, setPurpose] = useState(null);
  const [country, setCountry] = useState('Philippines');
  const [region, setRegion] = useState('00');
  const [regionCode, setRegionCode] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    register(
      { name: 'country', type: 'custom' },
      { required: { value: true, message: 'Country is required' } }
    );
    register(
      { name: 'province', type: 'custom' },
      { required: { value: true, message: 'Province is required' } }
    );
    register(
      { name: 'bestTimeToContact', type: 'custom' },
      { required: { value: true, message: 'Best time to contact is required' } }
    );
    register('product', {
      required: { value: true, message: 'Product is required' },
    });
  }, []);

  const onChangePurpose = (e) => {
    setPurpose(e.target.value);
  };

  const selectCountry = (value) => {
    setCountry(value);
    setValue('country', value, { shouldValidate: true });
    setRegion('');
    setValue('province', '', { shouldValidate: true });
    if (value === 'Philippines') setRegionCode('');
  };

  const selectRegion = (value, e) => {
    const fullValue = e.target.selectedOptions[0].innerText;
    setRegion(value);
    if (country === 'Philippines' && value === '00') setRegionCode(null);
    else if (country === 'Philippines' && value !== '00')
      setRegionCode('PH-' + value);
    if (country !== 'Philippines') setRegionCode('');
    setValue('province', fullValue, { shouldValidate: true });
  };

  const handleVerify = (response) => {
    setValue('captcha', response, { shouldValidate: true });
  };

  const handleExpiry = () => {
    setValue('captcha', null, { shouldValidate: true });
    recaptchaInstance.reset();
  };

  const handleProductChange = (e) => {
    const value = e.map(({ value }) => value);
    setValue('product', value.length ? value : null, { shouldValidate: true });
  };

  const onSubmit = (form, e) => {
    const _data = {
      ...form,
    };
    setIsSending(true);
    axios
      .post(`${postApiUrl()}mail.php`, JSON.stringify(_data), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        const success = response.data.success;
        if (success) {
          e.target.reset();
          setIsSending(false);
          setIsSuccess(true);
          recaptchaInstance.reset();
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
        }
      })
      .catch((error) => {
        setIsSending(false);
        setIsError(true);
        recaptchaInstance.reset();
        setTimeout(() => {
          setIsError(false);
        }, 3000);
      });
  };

  return (
    <Section>
      <Grid childWidth="1-1">
        <Column>
          <Grid childWidth="1-1">
            <Column className="uk-flex uk-flex-column">
              <h5 className="meta uk-margin-remove-bottom">CONTACT FORM</h5>
              <h2 className="margin-top-30">
                Reach us using the contact form below
              </h2>
            </Column>
            <Column>
              <Grid childWidth="1-1">
                <Column>
                  <Column
                    className="uk-padding uk-box-shadow-small"
                    style={{ backgroundColor: 'white' }}
                  >
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Grid childWidth="1-1">
                        <Column>
                          <Grid
                            childWidth="1-1"
                            className="uk-flex-middle uk-grid-row-small"
                          >
                            <Column>
                              <label className="uk-form-label">Purpose</label>
                            </Column>
                            <Column>
                              <Grid childWidth="auto">
                                <label>
                                  <input
                                    onChange={onChangePurpose}
                                    type="radio"
                                    className="uk-radio uk-margin-small-right"
                                    name="purpose"
                                    value="requestQuote"
                                    ref={register({
                                      required: {
                                        value: true,
                                        message: 'Purpose is required',
                                      },
                                    })}
                                  />
                                  Request quote
                                </label>
                                <label>
                                  <input
                                    onChange={onChangePurpose}
                                    type="radio"
                                    className="uk-radio uk-margin-small-right"
                                    name="purpose"
                                    value="requestDemo"
                                    ref={register({
                                      required: {
                                        value: true,
                                        message: 'Purpose is required',
                                      },
                                    })}
                                  />
                                  Request demo
                                </label>
                                <label>
                                  <input
                                    onChange={onChangePurpose}
                                    type="radio"
                                    className="uk-radio uk-margin-small-right"
                                    name="purpose"
                                    value="requestBrochure"
                                    ref={register({
                                      required: {
                                        value: true,
                                        message: 'Purpose is required',
                                      },
                                    })}
                                  />
                                  Request brochure
                                </label>
                                <label>
                                  <input
                                    onChange={onChangePurpose}
                                    type="radio"
                                    className="uk-radio uk-margin-small-right"
                                    name="purpose"
                                    value="requestClientList"
                                    ref={register({
                                      required: {
                                        value: true,
                                        message: 'Purpose is required',
                                      },
                                    })}
                                  />
                                  Request client list
                                </label>
                              </Grid>
                              <ErrorMessage
                                name="purpose"
                                errors={errors}
                                as="span"
                                className="uk-display-block uk-text-danger uk-margin-small-top"
                              />
                            </Column>
                          </Grid>
                        </Column>
                        {purpose === 'requestClientList' ? null : (
                          <Column>
                            <Grid
                              childWidth="1-1"
                              className="uk-flex-middle uk-grid-row-small"
                            >
                              <Column>
                                <label className="uk-form-label">Product</label>
                              </Column>
                              <Column>
                                <Select
                                  onChange={handleProductChange}
                                  options={products}
                                  isMulti
                                />
                                <ErrorMessage
                                  name="product"
                                  errors={errors}
                                  as="span"
                                  className="uk-display-block uk-text-danger uk-margin-small-top"
                                />
                              </Column>
                            </Grid>
                          </Column>
                        )}
                        <Column>
                          <Grid childWidth="1-1 expand@m">
                            <Column>
                              <Grid
                                childWidth="1-1"
                                className="uk-flex-middle uk-grid-row-small"
                              >
                                <Column>
                                  <label className="uk-form-label">
                                    Company name
                                  </label>
                                </Column>
                                <Column>
                                  <input
                                    type="text"
                                    name="companyName"
                                    className="uk-input"
                                    autoComplete="off"
                                    ref={register({
                                      required: {
                                        value: true,
                                        message: 'Company name is required',
                                      },
                                    })}
                                  />
                                  <ErrorMessage
                                    name="companyName"
                                    errors={errors}
                                    as="span"
                                    className="uk-display-block uk-text-danger uk-margin-small-top"
                                  />
                                </Column>
                              </Grid>
                            </Column>
                            <Column>
                              <Grid
                                childWidth="1-1"
                                className="uk-flex-middle uk-grid-row-small"
                              >
                                <Column>
                                  <label className="uk-form-label">
                                    Contact person
                                  </label>
                                </Column>
                                <Column>
                                  <input
                                    type="text"
                                    name="contactPerson"
                                    className="uk-input"
                                    autoComplete="off"
                                    ref={register({
                                      required: {
                                        value: true,
                                        message: 'Contact person is required',
                                      },
                                    })}
                                  />
                                  <ErrorMessage
                                    name="contactPerson"
                                    errors={errors}
                                    as="span"
                                    className="uk-display-block uk-text-danger uk-margin-small-top"
                                  />
                                </Column>
                              </Grid>
                            </Column>
                          </Grid>
                        </Column>
                        <Column>
                          <Grid
                            childWidth="1-1"
                            className="uk-flex-middle uk-grid-row-small"
                          >
                            <Column>
                              <label className="uk-form-label">
                                Company address
                              </label>
                            </Column>
                            <Column>
                              <input
                                type="text"
                                name="companyAddress"
                                className="uk-input"
                                autoComplete="off"
                                ref={register({
                                  required: {
                                    value: true,
                                    message: 'Company address is required',
                                  },
                                })}
                              />
                              <ErrorMessage
                                name="companyAddress"
                                errors={errors}
                                as="span"
                                className="uk-display-block uk-text-danger uk-margin-small-top"
                              />
                            </Column>
                          </Grid>
                        </Column>
                        <Column>
                          <Grid childWidth="1-1 expand@l">
                            <Column>
                              <Grid
                                childWidth="1-1"
                                className="uk-flex-middle uk-grid-row-small"
                              >
                                <Column>
                                  <label className="uk-form-label">
                                    Country
                                  </label>
                                </Column>
                                <Column>
                                  <CountryDropdown
                                    classes="uk-select"
                                    value={country}
                                    onChange={selectCountry}
                                    priorityOptions={['PH']}
                                  />
                                  <ErrorMessage
                                    name="country"
                                    errors={errors}
                                    as="span"
                                    className="uk-display-block uk-text-danger uk-margin-small-top"
                                  />
                                </Column>
                              </Grid>
                            </Column>
                            <Column>
                              <Grid
                                childWidth="1-1"
                                className="uk-flex-middle uk-grid-row-small"
                              >
                                <Column>
                                  <label className="uk-form-label">
                                    Province
                                  </label>
                                </Column>
                                <Column>
                                  <RegionDropdown
                                    valueType="short"
                                    defaultOptionLabel="Select province"
                                    classes="uk-select"
                                    country={country}
                                    value={region}
                                    onChange={selectRegion}
                                  />
                                  <ErrorMessage
                                    name="province"
                                    errors={errors}
                                    as="span"
                                    className="uk-display-block uk-text-danger uk-margin-small-top"
                                  />
                                </Column>
                              </Grid>
                            </Column>
                            {country === 'Philippines' ? (
                              <Column>
                                <Grid
                                  childWidth="1-1"
                                  className="uk-flex-middle uk-grid-row-small"
                                >
                                  <Column>
                                    <label className="uk-form-label">
                                      City/Municipality
                                    </label>
                                  </Column>
                                  <Column>
                                    <select
                                      name="city"
                                      className="uk-select"
                                      ref={register({
                                        required: {
                                          value: true,
                                          message:
                                            'City/Municipality is required',
                                        },
                                      })}
                                    >
                                      <option value="">
                                        Select city/municipality
                                      </option>
                                      {filter(
                                        citiesMunicipalities,
                                        (city) => city.province === regionCode
                                      ).map((city, i) => (
                                        <option key={i} value={city.fullName}>
                                          {city.fullName}
                                        </option>
                                      ))}
                                    </select>
                                    <ErrorMessage
                                      name="city"
                                      errors={errors}
                                      as="span"
                                      className="uk-display-block uk-text-danger uk-margin-small-top"
                                    />
                                  </Column>
                                </Grid>
                              </Column>
                            ) : null}
                          </Grid>
                        </Column>
                        <Column>
                          <Grid childWidth="1-1 expand@m">
                            <Column>
                              <Grid
                                childWidth="1-1"
                                className="uk-flex-middle uk-grid-row-small"
                              >
                                <Column>
                                  <label className="uk-form-label">
                                    Email address
                                  </label>
                                </Column>
                                <Column>
                                  <input
                                    type="text"
                                    name="emailAddress"
                                    className="uk-input"
                                    autoComplete="off"
                                    ref={register({
                                      required: {
                                        value: true,
                                        message: 'Email address is required',
                                      },
                                      pattern: {
                                        value:
                                          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                      },
                                    })}
                                  />
                                  <ErrorMessage
                                    name="emailAddress"
                                    errors={errors}
                                    as="span"
                                    className="uk-display-block uk-text-danger uk-margin-small-top"
                                  />
                                </Column>
                              </Grid>
                            </Column>
                            <Column>
                              <Grid
                                childWidth="1-1"
                                className="uk-flex-middle uk-grid-row-small"
                              >
                                <Column>
                                  <label className="uk-form-label">
                                    Contact number
                                  </label>
                                </Column>
                                <Column>
                                  <input
                                    type="tel"
                                    name="contactNumber"
                                    className="uk-input"
                                    autoComplete="off"
                                    ref={register({
                                      required: {
                                        value: true,
                                        message: 'Contact number is required',
                                      },
                                    })}
                                  />
                                  <ErrorMessage
                                    name="contactNumber"
                                    errors={errors}
                                    as="span"
                                    className="uk-display-block uk-text-danger uk-margin-small-top"
                                  />
                                </Column>
                              </Grid>
                            </Column>
                            <Column>
                              <Grid
                                childWidth="1-1"
                                className="uk-flex-middle uk-grid-row-small"
                              >
                                <Column>
                                  <label className="uk-form-label">
                                    Best time to contact
                                  </label>
                                </Column>
                                <Column>
                                  <DatePicker
                                    className="uk-input"
                                    selected={startDate}
                                    onChange={(date) => {
                                      const formatted = format(date, 'p');
                                      setStartDate(date);
                                      setValue('bestTimeToContact', formatted, {
                                        shouldValidate: true,
                                      });
                                    }}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                  />
                                  <ErrorMessage
                                    name="bestTimeToContact"
                                    errors={errors}
                                    as="span"
                                    className="uk-display-block uk-text-danger uk-margin-small-top"
                                  />
                                </Column>
                              </Grid>
                            </Column>
                          </Grid>
                        </Column>
                        <Column>
                          <Grid
                            childWidth="1-1"
                            className="uk-flex-middle uk-grid-row-small"
                          >
                            <Column>
                              <label className="uk-form-label">
                                Additional message
                              </label>
                            </Column>
                            <Column>
                              <textarea
                                name="additionalMessage"
                                className="uk-textarea"
                                rows={4}
                                ref={register}
                              ></textarea>
                            </Column>
                          </Grid>
                        </Column>
                        <Column>
                          <Grid childWidth="expand" className="uk-flex-middle">
                            <Column className="uk-flex uk-flex-column">
                              <Recaptcha
                                className="uk-width-1-1"
                                sitekey="6LdHNMMUAAAAAD6VogsJyHQ8tFPpDb1egudacj7_"
                                size="normal"
                                verifyCallback={handleVerify}
                                expiredCallback={handleExpiry}
                                ref={(e) => (recaptchaInstance = e)}
                              />
                              <input
                                type="hidden"
                                name="captcha"
                                ref={register({
                                  required: {
                                    value: true,
                                    message: 'Captcha is required',
                                  },
                                })}
                              />
                              <ErrorMessage
                                name="captcha"
                                errors={errors}
                                as="span"
                                className="uk-display-block uk-text-danger uk-margin-small-top"
                              />
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
                        <Column>
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
                            Send inquiry
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
