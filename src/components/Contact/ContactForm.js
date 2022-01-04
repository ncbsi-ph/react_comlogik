import React, { useState, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Recaptcha from 'react-recaptcha';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { filter } from 'lodash';
import Select from 'react-select';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { citiesMunicipalities } from 'ph-locations';

import 'react-datepicker/dist/react-datepicker.css';

import { Section, Grid, Column } from '../Grid';
import { sendContactForm } from '../../api';

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
                  <Column className="p-12 bg-white border-0 border-t-4 border-solid shadow-lg border-t-blue-500">
                    <ActualContactForm />
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

const ActualContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: 'Philippines',
      province: 'Metro Manila',
    },
  });

  const purpose = watch('purpose');

  const recaptcha = useRef(null);

  const [country, setCountry] = useState('Philippines');
  const [province, setProvince] = useState('00');
  const [regionCode, setRegionCode] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleCountryChange = (value) => {
    setCountry(value);
    setProvince(null);
    setValue('country', value, { shouldValidate: true });
    setValue('province', null, { shouldValidate: true });
  };

  const handleProvinceChange = (value, e) => {
    const fullValue = e.target.selectedOptions[0].innerText;
    setProvince(value);
    setValue('province', fullValue, { shouldValidate: true });
    setValue('city', '', { shouldValidate: true });
    if (country === 'Philippines') setRegionCode('PH-' + value);
    else setRegionCode(null);
  };

  const handleVerify = (response) => {
    setValue('captcha', response, { shouldValidate: true });
  };

  const handleExpiry = () => {
    setValue('captcha', null, { shouldValidate: true });
    recaptcha.current.reset();
  };

  const onSubmit = async (formData) => {
    try {
      setIsSending(true);
      const actualFormData = {
        ...formData,
        products: formData.products.map(({ value }) => value),
        time_to_contact: format(formData.time_to_contact, 'p'),
      };
      await sendContactForm(actualFormData);
      reset();
      recaptcha.current.reset();
      setIsSending(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      setIsSending(false);
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
  };

  useEffect(() => {
    register('country', {
      required: 'Country is required',
    });
    register('province', {
      required: 'Province is required',
    });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid childWidth="1-1">
        <Column>
          <Grid childWidth="1-1" className="uk-flex-middle uk-grid-row-small">
            <Column>
              <label className="uk-form-label">Purpose</label>
            </Column>
            <Column>
              <Grid childWidth="auto">
                {[
                  {
                    label: 'Request a demo',
                    value: 'Request a demo',
                  },
                  {
                    label: 'Request a quote',
                    value: 'Request a quote',
                  },
                  {
                    label: 'Request clients list',
                    value: 'Request clients list',
                  },
                ].map((purpose, i) => (
                  <label key={i}>
                    <input
                      {...register('purpose', {
                        required: 'Purpose is required',
                      })}
                      type="radio"
                      className="uk-radio uk-margin-small-right"
                      value={purpose.value}
                    />
                    {purpose.label}
                  </label>
                ))}
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
        {purpose !== 'Request clients list' && (
          <Column>
            <Grid childWidth="1-1" className="uk-flex-middle uk-grid-row-small">
              <Column>
                <label className="uk-form-label">Product(s)</label>
              </Column>
              <Column>
                <Controller
                  control={control}
                  name="products"
                  defaultValue={[]}
                  rules={{ required: 'Product(s) is required' }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      onChange={(newValue) => onChange(newValue)}
                      options={products}
                      value={value}
                      isMulti
                    />
                  )}
                />
                <ErrorMessage
                  name="products"
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
                  <label className="uk-form-label">Company name</label>
                </Column>
                <Column>
                  <input
                    {...register('company_name', {
                      required: 'Company name is required',
                    })}
                    type="text"
                    className="uk-input"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="company_name"
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
                  <label className="uk-form-label">Contact person</label>
                </Column>
                <Column>
                  <input
                    {...register('contact_person', {
                      required: 'Contact person is required',
                    })}
                    type="text"
                    className="uk-input"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="contact_person"
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
          <Grid childWidth="1-1" className="uk-flex-middle uk-grid-row-small">
            <Column>
              <label className="uk-form-label">Company address</label>
            </Column>
            <Column>
              <input
                {...register('company_address', {
                  required: 'Company address is required',
                })}
                type="text"
                className="uk-input"
                autoComplete="off"
              />
              <ErrorMessage
                name="company_address"
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
                  <label className="uk-form-label">Country</label>
                </Column>
                <Column>
                  <CountryDropdown
                    value={country}
                    onChange={handleCountryChange}
                    priorityOptions={['PH']}
                    classes="uk-select"
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
                  <label className="uk-form-label">Province</label>
                </Column>
                <Column>
                  <RegionDropdown
                    country={country}
                    value={province}
                    onChange={handleProvinceChange}
                    defaultOptionLabel="Select province"
                    valueType="short"
                    classes="uk-select"
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
                    <label className="uk-form-label">City/Municipality</label>
                  </Column>
                  <Column>
                    <select
                      {...register('city', {
                        required: 'City/Municipality is required',
                      })}
                      className="uk-select"
                    >
                      <option value="">Select city/municipality</option>
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
                  <label className="uk-form-label">Email address</label>
                </Column>
                <Column>
                  <input
                    {...register('email_address', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    type="text"
                    className="uk-input"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="email_address"
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
                  <label className="uk-form-label">Contact number</label>
                </Column>
                <Column>
                  <input
                    {...register('contact_number', {
                      required: 'Contact number is required',
                    })}
                    type="tel"
                    className="uk-input"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="contact_number"
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
                  <label className="uk-form-label">Best time to contact</label>
                </Column>
                <Column>
                  <Controller
                    control={control}
                    name="time_to_contact"
                    rules={{ required: 'Best time to contact is required' }}
                    render={({ field: { value, onChange } }) => (
                      <DatePicker
                        className="uk-input"
                        selected={value}
                        onChange={(date) => onChange(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                      />
                    )}
                  />
                  <ErrorMessage
                    name="time_to_contact"
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
          <Grid childWidth="1-1" className="uk-flex-middle uk-grid-row-small">
            <Column>
              <label className="uk-form-label">Additional message</label>
            </Column>
            <Column>
              <textarea
                {...register('additional_message')}
                className="uk-textarea"
                rows={4}
              />
            </Column>
          </Grid>
        </Column>
        <Column>
          <Grid childWidth="expand" className="uk-flex-middle">
            <Column className="uk-flex uk-flex-column">
              <Recaptcha
                ref={recaptcha}
                verifyCallback={handleVerify}
                expiredCallback={handleExpiry}
                sitekey="6LdHNMMUAAAAAD6VogsJyHQ8tFPpDb1egudacj7_"
                size="normal"
                className="uk-width-1-1"
              />
              <input
                {...register('captcha', {
                  required: 'Captcha is required',
                })}
                type="hidden"
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
              <a className="uk-alert-close" data-uk-close="" />
              <p>Your inquiry has been sent!</p>
            </div>
          </Column>
        ) : null}
        {isError ? (
          <Column>
            <div className="uk-alert-danger" data-uk-alert="">
              <a className="uk-alert-close" data-uk-close="" />
              <p>Error sending contact form. Please try again later.</p>
            </div>
          </Column>
        ) : null}
        <Column>
          <button
            disabled={isSending ? true : false}
            type="submit"
            className="border-0 uk-button uk-button-primary"
          >
            {isSending ? (
              <div className="uk-margin-small-right" data-uk-spinner=""></div>
            ) : null}
            Send inquiry
          </button>
        </Column>
      </Grid>
    </form>
  );
};

export default ContactForm;
