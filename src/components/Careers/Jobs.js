import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { useForm } from 'react-hook-form';
import { sanitize } from 'dompurify';
import { Icon } from '@iconify/react';
import frown from '@iconify/icons-feather/frown';

import { Section, Grid, Column } from '../Grid';
import { getCareers, sendCareerApplication } from '../../api';

const isPDF = (value) => {
  const type = value[0].type;
  return type === 'application/pdf';
};

const toBase64 = (file) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(btoa(reader.result));
    };
    reader.readAsBinaryString(file);
  });

const ApplicationForm = ({ title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (formData) => {
    try {
      setIsSending(true);
      const attachment = await toBase64(formData.attachment[0]);
      const actualData = {
        ...formData,
        title,
        attachment,
      };
      await sendCareerApplication(actualData);
      reset();
      setIsSending(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      setIsSending(false);
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
  };

  return (
    <Grid className="uk-grid-row-small" childWidth="1-1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Column>
          <h3>Apply for this job</h3>
        </Column>
        <Column>
          <div className="uk-flex uk-flex-column">
            <label className="uk-margin-small-bottom" htmlFor="full_name">
              Full name
            </label>
            <input
              {...register('full_name', { required: 'This field is required' })}
              id="full_name"
              className="uk-input"
            />
            {errors.full_name && (
              <span className="uk-display-block uk-text-danger uk-margin-small-top">
                {errors.full_name.message}
              </span>
            )}
          </div>
        </Column>
        <Column className="uk-margin-top">
          <div className="uk-flex uk-flex-column">
            <label className="uk-margin-small-bottom" htmlFor="email_address">
              Email address
            </label>
            <input
              {...register('email_address', {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
              id="email_address"
              className="uk-input"
            />
            {errors.email_address && (
              <span className="uk-display-block uk-text-danger uk-margin-small-top">
                {errors.email_address.message}
              </span>
            )}
          </div>
        </Column>
        <Column className="uk-margin-top">
          <div className="uk-flex uk-flex-column">
            <label className="uk-margin-small-bottom" htmlFor="attachment">
              Resume/CV
            </label>
            <div data-uk-form-custom="target: true">
              <input
                {...register('attachment', {
                  required: 'This field is required',
                  validate: {
                    isPDF: (value) =>
                      isPDF(value) || 'Please attach PDF files only',
                  },
                })}
                id="attachment"
                type="file"
                accept="application/pdf"
              />
              <input className="uk-input" placeholder="Select file" readOnly />
            </div>
          </div>
          {errors.attachment && (
            <span className="uk-display-block uk-text-danger uk-margin-small-top">
              {errors.attachment.message}
            </span>
          )}
        </Column>
        {isSuccess ? (
          <Column className="uk-margin-top">
            <div className="uk-alert-success" data-uk-alert="">
              <a className="uk-alert-close" data-uk-close=""></a>
              <p>Your application has been sent!</p>
            </div>
          </Column>
        ) : null}
        {isError ? (
          <Column className="uk-margin-top">
            <div className="uk-alert-danger" data-uk-alert="">
              <a className="uk-alert-close" data-uk-close=""></a>
              <p>Sending of application failed. Please try again later.</p>
            </div>
          </Column>
        ) : null}
        <Column>
          <button
            type="submit"
            className="border-none uk-button uk-button-primary uk-margin-top"
            disabled={isSending}
          >
            {isSending && (
              <div className="uk-margin-small-right" data-uk-spinner="" />
            )}
            Submit application
          </button>
        </Column>
      </form>
    </Grid>
  );
};

const Job = ({ title, experience, description, requirements, slots, tags }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={handleModal}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        className="uk-margin-auto-vertical uk-padding uk-box-shadow-medium"
        style={{
          overlay: {
            padding: '50px 30px',
            display: 'flex',
            alignItems: 'flex-start',
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 1000,
            overflowY: 'auto',
          },
          content: {
            borderRadius: '4px',
            backgroundColor: 'white',
            outline: 0,
            overflowY: 'auto',
            transform: 'translateY(0)',
            boxSizing: 'border-box',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            marginTop: 'auto',
            marginBottom: 'auto',
            margin: '0 auto',
            position: 'relative',
            width: '1000px',
            maxWidth: 'calc(100% - 0.01px)',
          },
        }}
      >
        <Grid childWidth="1-1" className="uk-grid-row-small">
          <Column className="uk-flex uk-flex-right">
            <button type="button" data-uk-close="" onClick={handleModal} />
          </Column>
          <Column>
            <h2 className="text-gray-700">
              {title}
              <span className="p-3 text-xs font-normal tracking-wide uk-badge uk-background-secondary uk-margin-small-left">
                {slots > 1 ? `${slots} slots` : `${slots} slot`}
              </span>
            </h2>
          </Column>
          <Column>
            <span className="text-gray-500">Experience: {experience}</span>
          </Column>
          {!!tags.length && (
            <Column>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                  <div key={i}>
                    <div className="p-1 text-xs font-semibold bg-transparent border border-solid rounded text-primary-500 border-primary-500">
                      {tag}
                    </div>
                  </div>
                ))}
              </div>
            </Column>
          )}
          <Column className="mt-8">
            <div className="mb-2 font-semibold text-gray-700">Description</div>
            <p
              className="m-0 prose max-w-none"
              dangerouslySetInnerHTML={{ __html: sanitize(description) }}
            />
          </Column>
          {requirements && (
            <Column className="mt-8">
              <div className="mb-2 font-semibold text-gray-700">
                Requirements
              </div>
              <p
                className="m-0 prose max-w-none"
                dangerouslySetInnerHTML={{ __html: sanitize(requirements) }}
              />
            </Column>
          )}
          <Column className="mt-8">
            <div className="gradient-bg-light uk-padding">
              <ApplicationForm title={title} />
            </div>
          </Column>
        </Grid>
      </ReactModal>
      <Column className="bg-gray-100 border border-gray-200 shadow uk-card uk-card-body">
        <Grid childWidth="1-1" className="uk-grid-row-small">
          <Column>
            <h3 className="text-gray-700">
              {title}
              <span className="p-3 text-xs font-normal tracking-wide uk-badge uk-background-secondary uk-margin-small-left">
                {slots > 1 ? `${slots} slots` : `${slots} slot`}
              </span>
            </h3>
          </Column>
          <Column>
            <span className="text-gray-500">Experience: {experience}</span>
          </Column>
          {!!tags.length && (
            <Column>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                  <div key={i}>
                    <div className="p-1 text-xs font-semibold bg-transparent border border-solid rounded text-primary-500 border-primary-500">
                      {tag}
                    </div>
                  </div>
                ))}
              </div>
            </Column>
          )}
          <Column className="mt-8">
            <button
              onClick={handleModal}
              className="border-0 uk-button uk-button-primary"
            >
              View details
            </button>
          </Column>
        </Grid>
      </Column>
    </>
  );
};

const Jobs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCareers();
        const data = response.data.data;
        setData(data);
      } catch (error) {
        // TODO: Add proper error handling
        console.log('Failed to load careers');
      }
    };
    getData();
  }, []);

  return (
    <Section>
      <Grid childWidth="1-1">
        <Column className="uk-flex">
          <h2 className="uk-margin-remove">Available jobs</h2>
        </Column>
        <Column>
          <Grid childWidth="1-1 1-2@s 1-3@m">
            {data.length ? (
              data.map((career) => {
                return (
                  <Column key={career.id}>
                    <Job
                      title={career.title}
                      description={career.description}
                      experience={career.experience}
                      requirements={career.requirements}
                      slots={career.slots}
                      tags={career.tags}
                    />
                  </Column>
                );
              })
            ) : (
              <Column width="1-1">
                <Icon
                  icon={frown}
                  width="32"
                  height="32"
                  className="uk-margin-small-right"
                />
                There are no available jobs at the moment
              </Column>
            )}
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default Jobs;
